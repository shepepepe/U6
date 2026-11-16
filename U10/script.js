// U10 - Functions
// Ejercicios de la unidad


// ---------- Matemática Simple ----------

function triplicador(numero) {
  return numero * 3;
}

function multiplicador(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function resto(a, b) {
  return a % b;
}

// triplicar 5, multiplicar eso por 12, dividir por 12 y sacar el resto de dividir por 3
// (usando solamente las funciones de arriba)
function matematicaSimple() {
  let resultado = resto(division(multiplicador(triplicador(5), 12), 12), 3);

  console.log("triplicador(5) =", triplicador(5));
  console.log("multiplicador(15, 12) =", multiplicador(15, 12));
  console.log("division(180, 12) =", division(180, 12));
  console.log("resto(15, 3) =", resto(15, 3));
  console.log("Resultado final:", resultado);
}


// ---------- ¿Qué devuelve cada función? ----------

function test1(x, y) {
  return y - x
}

function test2(x, y) {
  return x * 2
  console.log(x)
  return x / 2
}

function queDevuelveCadaFuncion() {
  console.log("test1(10, 40) devuelve:", test1(10, 40));
  console.log("test2(10) devuelve:", test2(10));
}


// ---------- contarDeA_n ----------

function contarDeA_n(contar_de_a, contar_hasta) {
  let numero = 1;

  while (numero <= contar_hasta) {
    console.log(numero);
    numero += contar_de_a;
  }
}

function probarContarDeA_n() {
  let contar_de_a = Number(prompt("¿De a cuánto querés contar?"));
  let contar_hasta = Number(prompt("¿Hasta qué número?"));

  // si cuento de a 0 (o menos) el while no termina nunca
  if (contar_de_a > 0) {
    contarDeA_n(contar_de_a, contar_hasta);
  } else {
    console.log("Hay que contar de a 1 o más.");
  }
}


// ---------- Factorial ----------

function factorial(numero) {
  // los números negativos no tienen factorial
  if (numero < 0) {
    console.log("No existe el factorial de un número negativo.");
    return undefined;
  }

  let resultado = 1;  // el factorial de 0 es 1, así que arranco en 1
  let contador = 1;

  while (contador <= numero) {
    resultado = resultado * contador;
    contador++;  // si no sumo acá, el loop es infinito
  }

  return resultado;
}

function probarFactorial() {
  console.log("factorial(5) =", factorial(5));
  console.log("factorial(0) =", factorial(0));

  let numero = Number(prompt("Decime un número entero y te calculo el factorial"));

  if (isNaN(numero)) {
    console.log("Eso no es un número.");
  } else {
    console.log(`factorial(${numero}) =`, factorial(numero));
  }
}
