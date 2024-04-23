// Местонахождение корабля
const location1 = 3;
const location2 = 4;
const location3 = 5;

// Предпологаемая позиция корабля(выстрел)
let guess;

// Условия завершения игры (потоплен или нет)
let isSunk = false;

// Добавляем счетчик попаданий
let hits = 0;

while (isSunk === false) {
  guess = +prompt("Введите предположительное местонахождение корабля, цифры от 0 до 6")
  if (guess === location1 || guess === location2 || guess === location3) {
    alert("HIT!!!");

    // считаем попадания
    hits = hits + 1;
    if (hits === 3) {
      isSunk = true;
      alert("You sunk my battle ship!");
    }
  } else {
    alert("MISS!!!");
  }
}

