/*
return a single value on the values in the array we iterate over
based on accumulator condition
*/

const scores = [10, 20, 60, 40, 70, 90, 30]

const result = scores.reduce((acc, curr) => {
  if (curr > 50) {
    acc++
  }
  return acc
}, 0)

console.log(result)

const scoresTwo = [
  { player: 'mario', score: 50 },
  { player: 'yoshi', score: 30 },
  { player: 'mario', score: 70 },
  { player: 'crystal', score: 60 },
  { player: 'mario', score: 90 },
  { player: 'yoshi', score: 10 },
  { player: 'mario', score: 50 },
  { player: 'crystal', score: 20 },
]

const marioTotal = scoresTwo.reduce((acc, curr) => {
  if (curr.player === 'mario') {
    acc += curr.score
  }
  return acc
}, 0)

console.log(marioTotal);
