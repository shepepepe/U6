// U9 - While loop
// Desafío de la unidad: Piedra, Papel o Tijera + Torneo Algorítmico


// ✊✋✌️ Piedra, Papel o Tijera
function piedraPapelOTijera() {
  let seguirJugando = true;

  while (seguirJugando) {
    let jugada = prompt('Elegí: "Piedra", "Papel" o "Tijera"').trim().toLowerCase();

    // obligo al usuario a escribir una jugada que valga
    while (jugada !== "piedra" && jugada !== "papel" && jugada !== "tijera") {
      jugada = prompt('Eso no vale. Escribí "Piedra", "Papel" o "Tijera"').trim().toLowerCase();
    }

    // la compu elige al azar: 0, 1 o 2
    let azar = Math.floor(Math.random() * 3);
    let jugadaCompu = "";

    if (azar === 0) {
      jugadaCompu = "piedra";
    } else if (azar === 1) {
      jugadaCompu = "papel";
    } else {
      jugadaCompu = "tijera";
    }

    // veo quién ganó
    if (jugada === jugadaCompu) {
      alert(`Los dos elegimos ${jugada}. ¡Empate!`);
    } else if (
      (jugada === "piedra" && jugadaCompu === "tijera") ||
      (jugada === "papel" && jugadaCompu === "piedra") ||
      (jugada === "tijera" && jugadaCompu === "papel")
    ) {
      alert(`Elegiste ${jugada} y la compu ${jugadaCompu}. ¡Ganaste! 🎉`);
    } else {
      alert(`Elegiste ${jugada} y la compu ${jugadaCompu}. Perdiste 😢`);
    }

    let respuesta = prompt("¿Querés volver a jugar? (si / no)").trim().toLowerCase();
    seguirJugando = respuesta === "si" || respuesta === "sí";
  }

  console.log("¡Gracias por jugar!");
}


// 🏆 Torneo Algorítmico (código reparado)
function torneoAlgoritmico() {
  let victoriasUsuario = 0;
  let victoriasMaquina = 0;

  // ERROR 1 (arreglado): con || el torneo no cortaba nunca a tiempo. Va con &&.
  while (victoriasUsuario < 3 && victoriasMaquina < 3) {

    let jugada = prompt("Elige: Piedra, Papel o Tijera");
    // ERROR 2 (arreglado): paso todo a minúsculas y saco los espacios de más
    jugada = jugada.trim().toLowerCase();

    while (jugada !== "piedra" && jugada !== "papel" && jugada !== "tijera") {
      jugada = prompt("Esa jugada no existe. Elige: Piedra, Papel o Tijera").trim().toLowerCase();
    }

    let azar = Math.random();
    let jugadaMaquina = "";

    if (azar < 0.33) {
      jugadaMaquina = "piedra";
    } else if (azar < 0.66) {
      jugadaMaquina = "papel";
    } else {
      jugadaMaquina = "tijera";
    }

    // ERROR 3 (arreglado): Template Literal en vez de concatenar con +
    console.log(`La máquina eligió: ${jugadaMaquina}`);

    // Lógica de victoria
    if (jugada === jugadaMaquina) {
      console.log("Empate, nadie suma.");
    } else if (
      (jugada === "piedra" && jugadaMaquina === "tijera") ||
      (jugada === "papel" && jugadaMaquina === "piedra") ||
      (jugada === "tijera" && jugadaMaquina === "papel")
    ) {
      // ERROR 4 (arreglado): faltaban las variables acumuladoras
      victoriasUsuario++;
      console.log("¡Ganaste la ronda!");
    } else {
      victoriasMaquina++;
      console.log("La máquina ganó la ronda.");
    }

    console.log(`Marcador: vos ${victoriasUsuario} - máquina ${victoriasMaquina}`);
  }

  // ERROR 5 (arreglado): operador ternario para anunciar al campeón
  let campeon = victoriasUsuario === 3 ? "¡Sos el campeón del torneo! 🏆" : "La máquina ganó el torneo 🤖";
  alert(campeon);
}
