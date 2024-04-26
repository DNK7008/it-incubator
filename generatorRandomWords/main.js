const words_1 = ["Ира", "Женя", "Викторович", "Denis", "Юля"];
const words_2 = ["любит есть", "хочет погрызть", "всегда ищет"];
const words_3 = ["морковку", "макороны", "косточку"];

function makePhrases(param_1, param_2, param_3) {
  let result = indexGet(param_1) + " " + indexGet(param_2) + " " + indexGet(param_3);
  return result;
}

function indexGet(wordsArray) {
  let indexRandom = Math.floor(Math.random() * wordsArray.length);
  return wordsArray[indexRandom];
}

console.log(makePhrases(words_1, words_2, words_3));
alert(makePhrases(words_1, words_2, words_3));
