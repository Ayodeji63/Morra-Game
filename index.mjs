import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib({ REACH_NO_WARN: "Y" });

const startingBalance = stdlib.parseCurrency(100);
const accAlice = await stdlib.newTestAccount(startingBalance);
const accBob = await stdlib.newTestAccount(startingBalance);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

const Hand = ["zero", "one", "two", "three", "four", "five"];
const result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const OUTCOME = ["Alice wins", "Draw", "Bob Wins"];

const common = (who) => ({
  ...stdlib.hasRandom,
  pickFinger: () => {
    const hand = Math.floor(Math.random() * Hand.length);
    console.log(`${who} picked ${Hand[hand]}`);
    return hand;
  },
  guessResult: () => {
    const total = Math.floor(Math.random() * result.length);
    console.log(`${who} guessed the total ${result[total]}`);
    return total;
  },
  seeOutcome: (outcome) => {
    console.log(`${who} saw outcome ${OUTCOME[outcome]}`);
  },
  informTimeout: () => {
    console.log(`${who} observed a timeout`);
  },
});

await Promise.all([
  ctcAlice.p.Alice({
    ...common("Alice"),
    wager: stdlib.parseCurrency(5),
    deadline: 10,
  }),
  ctcBob.p.Bob({
    ...common("Bob"),
    acceptWager: async (amt) => {
      if (Math.random() <= 0.5) {
        for (let i = 0; i < 10; i++) {
          console.log(`Bob takes his sweet time`);
          await stdlib.wait(1);
        }
      } else {
        console.log(`Bob accept the wager ${fmt(amt)}`);
      }
    },
  }),
]);

const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);
console.log(`Alice went from ${beforeAlice} to ${afterAlice}`);
console.log(`Bob went from ${beforeBob} to ${afterBob}`);

console.log("Goodbye Alice and Bob");
