// U14 - Ejercicio: Resaltador

// Selecciono todos los párrafos del texto y los guardo en una variable
let parrafos = document.querySelectorAll(".texto p");

// Recorro los párrafos y a cada uno le agrego el evento de click
for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].addEventListener("click", function () {
    // "this" es el párrafo al que le hicieron click:
    // si no tiene la clase se la pone, y si ya la tiene se la saca
    this.classList.toggle("resaltado");
  });
}
