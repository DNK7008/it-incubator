let bubble = [];
let maxScore = 0;
let minScore = 100;
let bestSolutions = []; 
let minSolutions = []; 
// создаем массив произвольных значений
for (let i = 0; i < 36; i++) {
  bubble.push(Math.floor(Math.random() * 20));
  // вывод значений массива в консоль 
  console.log("Babble solution #" + i + " score: " + bubble[i]);
  // находим максимальное значение в массиве
  if (maxScore < bubble[i]) {
    maxScore = bubble[i]
  }
  // находим минимальное  значение в массиве
  if (bubble[i] < minScore) {
    minScore = bubble[i];
  }
}

console.log("Babble tests: " + bubble.length);
console.log("Highest bubble score: " + maxScore);
console.log("Min bubble score: " + minScore);

for (let i = 0; i < bubble.length; i++) {
  if (bubble[i] === maxScore) {
    bestSolutions.push(i);
  }
  if (bubble[i] === minScore) {
    minSolutions.push(i);
  }
} 
console.log("Best bubble score: " + bestSolutions);
console.log("Min bubble score: " + minSolutions);