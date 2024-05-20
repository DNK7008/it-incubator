let bubble = [];
let maxScore = 0;
let minScore = 100;
for (let i = 0; i < 36; i++) {
  bubble.push(Math.floor(Math.random() * 100))
  console.log("Babble solution #" + i + " score: " + bubble[i]);
  if (maxScore < bubble[i]) {
    maxScore = bubble[i]
  }
}
console.log("Babble tests: " + bubble.length);
console.log("Highest bubble score: " + maxScore);

// находим самое минимальное значение и выводим его
for (let i = 0; i < bubble.length; i++) {
  if (bubble[i] < minScore) {
    minScore = bubble[i];
  }
}
console.log("Min bubble score: " + minScore);

