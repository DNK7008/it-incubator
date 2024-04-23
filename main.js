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
    count = count + 1;

    if (count === 3) {
      alert("You win!");
    }

  } else {
    alert("MISS!!!");
  }
}

