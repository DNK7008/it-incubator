const words_1 = ["Мой кот", "Моя собака", "Мой попугай"];
const words_2 = ["любит есть", "хочет погрызть", "всегда ищет"];
const words_3 = ["морковку", "макороны", "косточку"];

function indexGet(wordsArray) {
  let indexRandom = Math.floor(Math.random() * wordsArray.length);
  return indexRandom;
}
alert(words_1[indexGet(words_1)] + " " + words_2[indexGet(words_2)] + " " + words_3[indexGet(words_3)]);
