'reach 0.1'

const common = {
    pickHand: Fun([], UInt),
    guessResult:Fun([], UInt),
    seeOutcome:Fun([UInt], Null)
}
export const main = Reach.App(() => {
    const Alice = Participant('Alice', { 
        //
        ...common
     })
     const Bob = Participant('Bob', { 
        //
        ...common
      })
      init();
      

      Alice.only(() => {
        const aliceHand  = declassify(interact.pickHand())
        const aliceGuessResult = declassify(interact.guessResult())
      })
      Alice.publish(aliceHand, aliceGuessResult);
      commit();

      Bob.only(() => {
        const bobHand = declassify(interact.pickHand())
        const bobGuessResult = declassify(interact.guessResult())
      })
      Bob.publish(bobHand, bobGuessResult)

      const result = () => {
        const outcome = aliceHand + bobHand == aliceGuessResult ? 0 
        : aliceHand + bobHand == bobGuessResult ? 2 
        : 1
        return outcome
      }
      each([Alice, Bob], () => {
        interact.seeOutcome(result())
    });
      commit();
})
