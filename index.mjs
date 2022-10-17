import {loadStdlib} from '@reach-sh/stdlib'
import * as backend from './build/index.main.mjs'
const stdlib = loadStdlib();

const startingBalance = stdlib.parseCurrency(100)
const accAlice = await stdlib.newTestAccount(startingBalance)
const accBob = await stdlib.newTestAccount(startingBalance)

const ctcAlice = accAlice.contract(backend)
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const Hand = ['zero','one', 'two', 'three', 'four', 'five']
const result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const OUTCOME = ['Alice wins', 'Draw', 'Bob Wins']

const common = (who) => ({
    pickHand: () => {
        const hand = Math.floor(Math.random() * Hand.length)
        console.log(`${who} picked ${Hand[hand]}`);
        console.log(hand);
        return hand
    },
    guessResult: () => {
        const total = Math.floor(Math.random() * result.length)
        console.log(`${who} guessed the total ${result[total]}`);
        console.log(total);
        return total
    },
    seeOutcome:(outcome) => {
        console.log(`${who} saw outcome ${OUTCOME[outcome]}`);
    }
})

await Promise.all([
    ctcAlice.p.Alice({
        ...common('Alice')
    }),
    ctcBob.p.Bob({
        ...common('Bob')
    })
])

console.log('Goodbye Alice and Bob');