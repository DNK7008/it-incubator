let bubble = [];
maxScore = 0;
minScore = 100;
for (let i = 0; i < 36; i++) {
  bubble.push(Math.floor(Math.random() * 100))
  console.log("Babble solution #" + i + " score: " + bubble[i]);
  if (maxScore < bubble[i]) {
    maxScore = bubble[i]
  }
}
console.log("Babble tests: " + bubble.length);
console.log("Highest bubble score: " + maxScore);
for (let i = bubble.length; i > 0; i--)
  if (minScore > bubble[i]) {
    minScore = bubble[i]
  }
console.log("Min bubble score: " + minScore);



