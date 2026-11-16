// U14 - Ejercicio: Beeper

let boton = document.querySelector("#beep");
let audio = null;  // se crea con el primer click


// Hace un sonidito corto para que el beeper suene de verdad
function sonarBeep() {
  if (audio === null) {
    audio = new AudioContext();
  }

  let oscilador = audio.createOscillator();
  let volumen = audio.createGain();

  oscilador.frequency.value = 880;
  volumen.gain.value = 0.1;

  oscilador.connect(volumen);
  volumen.connect(audio.destination);

  oscilador.start();
  oscilador.stop(audio.currentTime + 0.12);
}


// La función callback está definida afuera del evento, como pedía la consigna
function seEjecutaEnEvento() {
  let body = document.querySelector("body");

  // agrego un párrafo que dice BEEP al final del body
  let parrafo = document.createElement("p");
  parrafo.textContent = "BEEP";
  body.appendChild(parrafo);

  // con cada click le pongo o le saco la clase .color
  body.classList.toggle("color");

  sonarBeep();
}


boton.addEventListener("click", seEjecutaEnEvento);
