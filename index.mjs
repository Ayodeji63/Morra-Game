import { ask, loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

const stdlib = loadStdlib();

const isAlice = await ask.ask(`Are you Alice`, ask.yesno);

const who = isAlice ? "Alice" : "Bob";

console.log(`Starting Morra Game as ${who}`);

let acc = null;

const createAcc = await ask.ask(
  `Would you like to create an account (only possible in devnet)`,
  ask.yesno
);

if (createAcc) {
  acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
} else {
  const secret = await ask.ask(`What is your account secret?`, (x) => x);
  acc = await stdlib.newTestAccountFromSecret(secret);
}

let ctc = null;
if (isAlice) {
  ctc = acc.contract(backend);
  ctc.getInfo().then((info) => {
    console.log(`The contract is deployed as = ${JSON.stringify(info)}`);
  });
} else {
  const info = await ask.ask(
    `Please paste the contract information:`,
    JSON.parse
  );
  ctc = acc.contract(backend, info);
}

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance();
console.log(`Your balance is ${before}`);

const interact = { ...stdlib.hasRandom };

interact.informTimeout = () => {
  console.log(`There was a timeout`);
  process.exit(1);
};

if (isAlice) {
  const amt = await ask.ask(
    `How much do you want to wager?`,
    stdlib.parseCurrency
  );
  interact.wager = amt;
  interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000 }[stdlib.connector];
} else {
  interact.acceptWager = async (amt) => {
    const accepted = await ask.ask(
      `Do you accept the wager of ${fmt(amt)}?`,
      ask.yesno
    );
    if (!accepted) {
      process.exit(0);
    }
  };
}

const Hand = [0, 1, 2, 3, 4, 5];
const result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const OUTCOME = ["Alice wins", "Draw", "Bob Wins"];

interact.pickFinger = async () => {
  const finger = await ask.ask(`What finger will you play`, (x) => {
    const hand = Hand[x];
    if (hand == undefined) {
      throw Error(`Not a valid hand ${hand}`);
    }
    return hand;
  });
  console.log(`You played ${Hand[finger]}`);
  return finger;
};

interact.guessResult = async () => {
  const guessOutcome = await ask.ask(`Guess the outcome`, (x) => {
    const guess = result[x];
    if (guess == undefined) {
      throw Error(`Not a valid guess ${guess}`);
    }
    return guess;
  });
  console.log(`You guessed ${result[guessOutcome]}`);
  return guessOutcome;
};

interact.seeWinning = async (winningNum) => {
  console.log(`This is the Winnig Number ${winningNum}`);
};

interact.roundWinner = async (outcome) => {
  console.log(`This round ${OUTCOME[outcome]}`);
};

interact.seeOutcome = async (outcome) => {
  console.log(`The outcome is: ${OUTCOME[outcome]}`);
};

interact.endGame = async () => {
  console.log(`Round Ends`);
};

const part = isAlice ? ctc.p.Alice : ctc.p.Bob;
await part(interact);

const after = await getBalance();
console.log(`Your balance is now ${after}`);
ask.done();
