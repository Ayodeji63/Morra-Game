'reach 0.1'

const common = {
    pickHand: Fun([], UInt),
    guessResult:Fun([], UInt),
    seeOutcome:Fun([UInt], Null)
}
export const main = Reach.App(() => {
    const Alice = Participant('Alice', { 
        //
        ...common,
        wager: UInt,
     })
     const Bob = Participant('Bob', { 
        //
        ...common,
        acceptWager:Fun([UInt], Null)
      })
      init();
      

      Alice.only(() => {
        const amt = declassify(interact.wager)
        const aliceHand  = declassify(interact.pickHand())
        const aliceGuessResult = declassify(interact.guessResult())
      })
      Alice.publish(aliceHand, aliceGuessResult, amt)
      .pay(amt);
      commit();

      Bob.only(() => {
        interact.acceptWager(amt)
        const bobHand = declassify(interact.pickHand())
        const bobGuessResult = declassify(interact.guessResult())
      })
      Bob.publish(bobHand, bobGuessResult)
      .pay(amt)

      const result = () => {
        const outcome = aliceHand + bobHand == aliceGuessResult ? 0 
        : aliceHand + bobHand == bobGuessResult ? 2 
        : 1
        return outcome
      }
      const [forAlice, forBob] = 
      result() == 0 ? [2,  0] :
      result() == 2 ? [0,  2] :
                   [1,  1]
      transfer(forAlice * amt).to(Alice)
      transfer(forBob * amt).to(Bob)
      each([Alice, Bob], () => {
        interact.seeOutcome(result())
    });
      commit();
})
