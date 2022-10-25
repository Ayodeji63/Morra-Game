"reach 0.1";

const [isFinger, ZERO, ONE, TWO, THREE, FOUR, FIVE] = makeEnum(6);
const [
  isResult,
  ZEROS,
  ONES,
  TWOS,
  THREES,
  FOURS,
  FIVES,
  SIXS,
  SEVENS,
  EIGHTS,
  NINES,
  TENS,
] = makeEnum(11);
const [isOutcome, A_WINS, DRAW, B_WINS] = makeEnum(3);

const result = (aliceFinger, bobFinger, aliceGuessResult, bobGuessResult) => {
  const outcome =
    aliceGuessResult == bobGuessResult
      ? 1
      : aliceFinger + bobFinger == aliceGuessResult
      ? 0
      : aliceFinger + bobFinger == bobGuessResult
      ? 2
      : 1;
  return outcome;
};

// assert statements

assert(result(ZERO, FOUR, FOURS, SEVENS) == A_WINS);
assert(result(THREE, TWO, SEVENS, FIVES) == B_WINS);
assert(result(THREE, THREE, SIXS, SIXS) == DRAW);
assert(result(ONE, ONE, ONES, ONES) == DRAW);

// forall loops

forall(UInt, (aliceFinger) =>
  forall(UInt, (bobFinger) =>
    forall(UInt, (aliceGuessResult) =>
      forall(UInt, (bobGuessResult) =>
        assert(
          isOutcome(
            result(aliceFinger, bobFinger, aliceGuessResult, bobGuessResult)
          )
        )
      )
    )
  )
);

forall(UInt, (finger) =>
  forall(UInt, (guess) => assert(result(finger, finger, guess, guess) == DRAW))
);

forall(UInt, (aliceFinger) =>
  forall(UInt, (bobFinger) =>
    forall(UInt, (guess) =>
      assert(result(aliceFinger, bobFinger, guess, guess) === DRAW)
    )
  )
);

const common = {
  ...hasRandom,
  pickFinger: Fun([], UInt),
  guessResult: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
  const Alice = Participant("Alice", {
    //
    ...common,
    wager: UInt,
    deadline: UInt,
  });
  const Bob = Participant("Bob", {
    //
    ...common,
    acceptWager: Fun([UInt], Null),
  });
  init();

  //helper function
  const informTimeout = () => {
    each([Alice, Bob], () => interact.informTimeout());
  };

  Alice.only(() => {
    const amt = declassify(interact.wager);
    const _aliceFinger = interact.pickFinger();
    const [_commitAliceFinger, _saltAliceFinger] = makeCommitment(
      interact,
      _aliceFinger
    );
    const commitAliceFinger = declassify(_commitAliceFinger);
    const _aliceGuessResult = interact.guessResult();
    const [_commitResult, _saltResult] = makeCommitment(
      interact,
      _aliceGuessResult
    );
    const commitResult = declassify(_commitResult);
    const deadline = declassify(interact.deadline);
  });
  Alice.publish(commitAliceFinger, commitResult, amt, deadline).pay(amt);
  commit();

  Bob.only(() => {
    interact.acceptWager(amt);
    const bobFinger = declassify(interact.pickFinger());
    const bobGuessResult = declassify(interact.guessResult());
  });
  Bob.publish(bobFinger, bobGuessResult)
    .pay(amt)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

  commit();

  Alice.only(() => {
    const saltAlice = declassify(_saltAliceFinger);
    const aliceFinger = declassify(_aliceFinger);
    const saltResult = declassify(_saltResult);
    const aliceGuessResult = declassify(_aliceGuessResult);
  });
  Alice.publish(saltAlice, aliceFinger, saltResult, aliceGuessResult).timeout(
    relativeTime(deadline),
    () => closeTo(Bob, informTimeout)
  );

  checkCommitment(commitAliceFinger, saltAlice, aliceFinger);
  checkCommitment(commitResult, saltResult, aliceGuessResult);

  const outcome = result(
    aliceFinger,
    bobFinger,
    aliceGuessResult,
    bobGuessResult
  );
  const [forAlice, forBob] =
    outcome == 0 ? [2, 0] : outcome == 2 ? [0, 2] : [1, 1];
  transfer(forAlice * amt).to(Alice);
  transfer(forBob * amt).to(Bob);
  each([Alice, Bob], () => {
    interact.seeOutcome(outcome);
  });
  commit();
});
