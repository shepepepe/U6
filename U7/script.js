// U7 - JavaScript
// Desafío de la unidad: Calculadora de Abastecimiento de por Vida


// 🍟 Ejercicio 1: El cálculo de los snacks
function calcularSnacks() {
  let edadActual = 17;          // mi edad
  let edadMaxima = 90;          // hasta qué edad hago la cuenta
  let snack = "papas fritas";   // mi snack favorito
  let snacksPorDia = 2;         // cuántos como por día
  let precioPorUnidad = 1500;   // lo que sale cada uno, en pesos

  // años que me quedan x 365 días x snacks por día
  let aniosRestantes = edadMaxima - edadActual;
  let cantidadFinal = aniosRestantes * 365 * snacksPorDia;

  alert(`Necesitarás ${cantidadFinal} de ${snack} para que te alcancen hasta los ${edadMaxima} años.`);

  // cuánta plata voy a gastar en total
  let gastoTotal = cantidadFinal * precioPorUnidad;

  console.log(`Me quedan ${aniosRestantes} años de comer ${snack}.`);
  console.log(`En total voy a gastar $${gastoTotal} en ${snack}.`);
}


// ✈️ Ejercicio 2: Presupuesto de viaje
function presupuestoDeViaje() {
  let diasDeViaje = 10;               // días que dura el viaje
  let presupuestoMaximo = 600000;     // plata que tengo para todo el viaje
  let comidasTotales = diasDeViaje * 3; // 3 comidas por día

  let dineroPorComida = presupuestoMaximo / comidasTotales;

  alert(`Podés gastar ${dineroPorComida} en cada comida para que te alcance la plata durante los ${diasDeViaje} días de viaje.`);

  console.log(`Son ${comidasTotales} comidas en total.`);
  console.log(`Puedo gastar $${dineroPorComida} en cada una.`);
}
