// U14 - Eventos disparados por el teclado


// ---------- Parte 1: ¿qué tecla apreté? ----------

let input = document.querySelector("#input");

input.addEventListener("keydown", function (e) {
  // e es el objeto del evento: key es la tecla y code es el código de esa tecla
  document.querySelector("#string").textContent = "Tecla: " + e.key;
  document.querySelector("#code").textContent = "Código: " + e.code;
});


// ---------- Parte 2: mini Patatap ----------

let escenario = document.querySelector("#escenario");
let audio = null;  // se crea con la primera tecla


// Devuelve un color al azar en formato rgb
function colorAlAzar() {
  let rojo = Math.floor(Math.random() * 256);
  let verde = Math.floor(Math.random() * 256);
  let azul = Math.floor(Math.random() * 256);

  return `rgb(${rojo}, ${verde}, ${azul})`;
}


// Dibuja un círculo en un lugar al azar del escenario
function dibujarCirculo() {
  let circulo = document.createElement("div");
  circulo.classList.add("circulo");

  circulo.style.backgroundColor = colorAlAzar();
  circulo.style.left = Math.floor(Math.random() * 85) + "%";
  circulo.style.top = Math.floor(Math.random() * 65) + "%";

  escenario.appendChild(circulo);

  // cuando termina la animación lo saco para no llenar la página de círculos
  setTimeout(function () {
    circulo.remove();
  }, 800);
}


// Hace un sonido. Cada tecla tiene una nota distinta según su letra
function hacerSonido(tecla) {
  if (audio === null) {
    audio = new AudioContext();
  }

  let oscilador = audio.createOscillator();
  let volumen = audio.createGain();

  oscilador.frequency.value = 200 + (tecla.charCodeAt(0) % 24) * 30;
  volumen.gain.value = 0.1;

  oscilador.connect(volumen);
  volumen.connect(audio.destination);

  oscilador.start();
  oscilador.stop(audio.currentTime + 0.15);
}


// Escucho las teclas en toda la página
document.addEventListener("keydown", function (e) {
  dibujarCirculo();
  hacerSonido(e.key);
});
