// U11 - Arrays
// Proyecto de la unidad (Lista de Súper - Parte 3) + ejercicios


// ---------- 🛒 Lista de Súper (Parte 3) ----------

// Imprime cada producto con su índice adelante. Ej: "0: Sal"
function logItems(arreglo) {
  arreglo.forEach(function (producto, indice) {
    console.log(`${indice}: ${producto}`);
  });
}

// "Súper App": maneja la lista con los comandos nuevo, listar, borrar y salir
function superApp() {
  let lista = ["Sal", "Leche", "Arroz"];
  let comando = "";

  while (comando !== "salir") {
    comando = prompt('¿Qué querés hacer? Escribí "nuevo", "listar", "borrar" o "salir"').trim().toLowerCase();

    if (comando === "nuevo") {
      let item = prompt("¿Qué producto querés agregar?").trim();
      lista.push(item);
      console.log(`Se agregó "${item}" a la lista.`);

    } else if (comando === "listar") {
      logItems(lista);

    } else if (comando === "borrar") {
      let respuesta = prompt("¿Qué número (índice) de producto querés borrar?").trim();
      let indice = Number(respuesta);

      // me fijo que el índice exista antes de borrar
      if (respuesta !== "" && indice >= 0 && indice < lista.length) {
        let borrados = lista.splice(indice, 1);
        console.log(`Se borró "${borrados[0]}" de la lista.`);
      } else {
        console.log("Ese índice no está en la lista.");
      }

    } else if (comando === "salir") {
      console.log("¡Chau! Así quedó la lista:");
      logItems(lista);

    } else {
      console.log(`No conozco el comando "${comando}".`);
    }
  }
}


// ---------- ¿Qué devuelve este código? ----------

function queDevuelveEsteCodigo() {
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let colores = ["Rojo", "Azul", "Verde", "Amarillo"];

  numbers.forEach(function (color) {
    if (color % 3 === 0) {
      console.log(color);
    }
  });
}


// ---------- Reverse ----------

// Imprime el arreglo al revés pero SIN modificarlo
function imprimirInvertido(arreglo) {
  let invertido = [];

  for (let i = arreglo.length - 1; i >= 0; i--) {
    invertido.push(arreglo[i]);
  }

  console.log(invertido);
}

// Este sí modifica el arreglo: da vuelta el orden de sus elementos
function invertirArreglo(arreglo) {
  // cambio el primero con el último, el segundo con el anteúltimo, etc.
  for (let i = 0; i < Math.floor(arreglo.length / 2); i++) {
    let ultimo = arreglo.length - 1 - i;
    let guardado = arreglo[i];
    arreglo[i] = arreglo[ultimo];
    arreglo[ultimo] = guardado;
  }
}

function probarReverse() {
  let juegos = ["CS2", "Minecraft", "FIFA", "GTA", "Fortnite"];

  console.log("Invertido sin modificar:");
  imprimirInvertido(juegos);
  console.log("El original sigue igual:", juegos);

  invertirArreglo(juegos);
  console.log("Después de invertirArreglo():", juegos);
}


// ---------- Poema Desordenado ----------

function ordenarPoema() {
  let poemaDesordenado = "los sean porque es ley tengan verdadera cualquier que porque entre pelean devoran de ajuera los los ellos si sea tiempo en unión primera la ésa unidos hermanos";

  let palabras = poemaDesordenado.split(" ");

  // Comparando con el poema original me di cuenta de que:
  // - la primera mitad son las palabras 1°, 3°, 5°... en orden
  // - la segunda mitad son las palabras 2°, 4°, 6°... pero al revés
  let mitad = palabras.length / 2;
  let impares = palabras.slice(0, mitad);
  let pares = palabras.slice(mitad).reverse();

  // voy agarrando una de cada lado
  let poemaOrdenado = [];
  for (let i = 0; i < mitad; i++) {
    poemaOrdenado.push(impares[i]);
    poemaOrdenado.push(pares[i]);
  }

  console.log(poemaOrdenado.join(" "));
}


// ---------- Desafío isUniform() ----------

function isUniform(arreglo) {
  // comparo todos contra el primero; apenas hay uno distinto, corto
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] !== arreglo[0]) {
      return false;
    }
  }
  return true;
}

function probarIsUniform() {
  console.log("isUniform([1, 1, 1, 1]) →", isUniform([1, 1, 1, 1]));
  console.log("isUniform([1, 2, 1, 1]) →", isUniform([1, 2, 1, 1]));
  console.log('isUniform(["a", "b", "p"]) →', isUniform(["a", "b", "p"]));
  console.log('isUniform(["b", "b", "b"]) →', isUniform(["b", "b", "b"]));
}


// ---------- Biggest Smallest ----------

function biggest_smallest(numeros) {
  let masChico = numeros[0];
  let masGrande = numeros[0];

  numeros.forEach(function (numero) {
    if (numero < masChico) {
      masChico = numero;
    }
    if (numero > masGrande) {
      masGrande = numero;
    }
  });

  console.log([masChico, masGrande]);
}

function probarBiggestSmallest() {
  biggest_smallest([111, 27, 31, 44, 101, 213, 33, 58]);
}


// ---------- Filter ----------

function ejerciciosFilter() {
  // Ejercicio 1: números mayores o iguales a 5
  let mayoresOIgualesA5 = arr => {
    return arr.filter(numero => numero >= 5);
  }
  console.log(mayoresOIgualesA5([3, 6, 8, 21]));

  // Ejercicio 2: solo los pares
  let numeros = [3, 7, 6, 13, 2, 24, 99];
  let pares = numeros.filter(numero => numero % 2 === 0);
  console.log(pares);

  // Ejercicio 3: palabras de 3 letras o menos
  let palabras = ['Et', 'Voluptua', 'Sed', 'At', 'Diam', 'Lorem']
  const palabrasCortas = palabras.filter(palabra => palabra.length <= 3);
  console.log(palabrasCortas);

  // Ejercicio 4: solo los strings
  const mix = [
    'Ut vero.',
    2,
    function () { console.log('hola mundo!') },
    56,
    'Diam rebum nonumy et.',
    true,
    false,
    'Kasd stet.',
    'Sit et dolor.',
    null,
    null,
    [1, 2, 3],
    'Dolore.'
  ];
  const soloStrings = mix.filter(elemento => typeof elemento === "string");
  console.log(soloStrings);
}


// ---------- Playlist ----------

function playlistSinEscucharEjercicio() {
  let playlist = ['Smells Like Teen Spirit', 'Everlong', 'Come As You Are', 'The Pretender', 'Heart-Shaped Box', 'Learn to Fly', 'Lithium']
  let playlistEscuchada = ['The Pretender', 'Lithium', 'Come As You Are']

  // me quedo con las canciones que NO están en la lista de escuchadas
  let playlistSinEscuchar = playlist.filter(cancion => !playlistEscuchada.includes(cancion));

  console.log(playlistSinEscuchar);
}


// ---------- Fibonacci ----------

// Devuelve el número que está en esa posición de la serie (la posición 1 es el 0)
function fibonacci(posicion) {
  let serie = [0, 1];

  // cada número nuevo es la suma de los dos anteriores
  for (let i = 2; i < posicion; i++) {
    serie.push(serie[i - 1] + serie[i - 2]);
  }

  return serie[posicion - 1];
}

function probarFibonacci() {
  console.log("Fibonacci (2):", fibonacci(2));
  console.log("Fibonacci (5):", fibonacci(5));
  console.log("Fibonacci (8):", fibonacci(8));
}
