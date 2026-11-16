// U8 - Conditional statements
// Proyecto de la unidad: ¿Puedo jubilarme?


// Parte 1: le digo a las mujeres si se pueden jubilar (a los 60)
function jubilacionMujeres() {
  let edad = Number(prompt("¿Cuántos años tenés?"));

  if (isNaN(edad)) {
    alert("Tenés que escribir tu edad con números.");
  } else if (edad >= 60) {
    alert("¡Ya estás en edad de jubilarte!");
  } else {
    alert(`Todavía no te podés jubilar. Te faltan ${60 - edad} años.`);
  }
}


// Parte 2: ahora para mujeres (60) y hombres (65)
function jubilacionMujeresYHombres() {
  let genero = prompt("¿Sos mujer u hombre? Escribí M o H").trim().toUpperCase();
  let edad = Number(prompt("¿Cuántos años tenés?"));

  if (isNaN(edad)) {
    alert("Tenés que escribir tu edad con números.");
  } else if (genero === "M") {
    if (edad >= 60) {
      alert("¡Ya estás en edad de jubilarte!");
    } else {
      alert(`Todavía no te podés jubilar. Te faltan ${60 - edad} años.`);
    }
  } else if (genero === "H") {
    if (edad >= 65) {
      alert("¡Ya estás en edad de jubilarte!");
    } else {
      alert(`Todavía no te podés jubilar. Te faltan ${65 - edad} años.`);
    }
  } else {
    alert("No entendí. Tenés que escribir M o H.");
  }
}


// Extra Bonus: todo resuelto con un solo if
function jubilacionConUnSoloIf() {
  let genero = prompt("¿Sos mujer u hombre? Escribí M o H").trim().toUpperCase();
  let edad = Number(prompt("¿Cuántos años tenés?"));

  // se jubila si es mujer de 60 o más, o si es hombre de 65 o más
  if ((genero === "M" && edad >= 60) || (genero === "H" && edad >= 65)) {
    alert("¡Ya estás en edad de jubilarte!");
  } else {
    alert("Todavía no estás en edad de jubilarte.");
  }
}
