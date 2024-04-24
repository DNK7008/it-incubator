// Местонахождение корабля
let locationRandom = Math.floor(Math.random() * 5)  // от 0 до 4
const location1 = locationRandom;
const location2 = locationRandom + 1;
const location3 = locationRandom + 2;

// Предпологаемая позиция корабля(выстрел)
let guess;
// Счетчик выстрелов
let guesses = 0;
// Условия завершения игры (потоплен или нет)
let isSunk = false;
// Добавляем счетчик попаданий
let hits = 0;
while (isSunk === false) {
  guess = +prompt("Введите предположительное местонахождение корабля, цифры от 0 до 6")
  if (guess < 0 || guess > 6) {
    alert("Please, enter a valid cell number")
  } else {
    // счетчик выстрелов
    guesses++;
    if (guess === location1 || guess === location2 || guess === location3) {
      alert("HIT!!!");
      // считаем попадания
      hits++;
      if (hits === 3) {
        isSunk = true;
        alert("You sunk my battle ship!");
      }
    } else {
      alert("MISS!!!");
    }
  }
  
}

const stats = "You have " + hits + " hits out of " + guesses + " shots.";
alert(stats);