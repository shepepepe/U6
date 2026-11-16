// U14 - Color Game Project
// Hay que adivinar qué cuadrado tiene el color del código RGB del título.


let numSquares = 6;            // 6 cuadrados en Hard, 3 en Easy
let colors;                    // los colores de la partida (los arma reset)
let pickedColor;               // el color ganador (lo elige reset)
let colorDeFondo = "#232323";  // el mismo color que el body

// Guardo cada elemento en una variable para no seleccionarlo a cada rato
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");


init();


// Arranca el juego: prepara los botones, los cuadrados y la primera partida
function init() {
  setupButtons();
  setupSquares();
  reset();
}


// Le da los eventos al botón de reset y a los botones Easy y Hard
function setupButtons() {
  resetButton.addEventListener("click", reset);

  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      // le saco "selected" a los dos y se lo pongo al que clickearon
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      numSquares = this.textContent === "Easy" ? 3 : 6;
      reset();
    });
  }
}


// Le da el evento de click a cada cuadrado
function setupSquares() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      let clickedColor = this.style.backgroundColor;

      if (clickedColor === pickedColor) {
        // ganó: todos los cuadrados y el título toman el color ganador
        messageDisplay.textContent = "¡Correcto!";
        changeColors(pickedColor);
        h1.style.backgroundColor = pickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        // se equivocó: el cuadrado desaparece
        this.style.backgroundColor = colorDeFondo;
        messageDisplay.textContent = "Intentalo Nuevamente";
      }
    });
  }
}


// Empieza una partida nueva
function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();

  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "Nuevos Colores";
  messageDisplay.textContent = "";
  h1.style.backgroundColor = colorDeFondo;

  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      // hay color para este cuadrado: lo muestro y lo pinto
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      // no hay color (modo Easy): lo escondo
      squares[i].style.display = "none";
    }
  }
}


// Pinta todos los cuadrados del mismo color
function changeColors(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}


// Elige al azar uno de los colores del arreglo
function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}


// Arma un color al azar: 3 números entre 0 y 255
function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}


// Devuelve un arreglo con la cantidad de colores al azar que le pida
function generateRandomColors(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }

  return arr;
}
