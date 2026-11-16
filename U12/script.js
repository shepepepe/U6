// U12 - Object data type
// Ejercicios de la unidad


// ---------- Registro En P5 ----------

function registroEnP5() {
  let nuevoUsuario = {
    usuario: "UnNuevoUsuario",
    edad: 23,
    direccion: "Calle de mentira",
    fechaDeNacimiento: "14/03/1999",
    contraseña: "unacontraseñamuysegura"
  };

  console.log(nuevoUsuario);
}


// ---------- Variable miAuto ----------

function variableMiAuto() {
  let miAuto = {};

  miAuto.marca = "Toyota";
  miAuto.año = 2020;
  miAuto.nuevo = false;

  let propertyKey = "modelo";
  miAuto[propertyKey] = "Corolla";

  let anotherPropertyKey = "precio";
  miAuto[anotherPropertyKey] = 25000000;

  let nextProperty = "color";
  miAuto[nextProperty] = "negro";

  // recorro el objeto y muestro cada key con su value
  for (let key in miAuto) {
    console.log(`${key}: ${miAuto[key]}`);
  }

  // Para pensar...
  console.log("miAuto[propertyKey] →", miAuto[propertyKey]);
  console.log('miAuto["modelo"] →', miAuto["modelo"]);
  console.log("miAuto[nextProperty] →", miAuto[nextProperty]);
  console.log('miAuto["color"] →', miAuto["color"]);
}


// ---------- Aumentar La Nota ----------

function aumentarLaNota() {
  let estudiantes = [
    { Estudiante: "Juan", nota: 6 },
    { Estudiante: "Mario", nota: 8 },
    { Estudiante: "Julia", nota: 10 },
    { Estudiante: "Sofia", nota: 2 }
  ];

  for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nota > 5) {
      estudiantes[i].nota += 2;

      // la nota no puede pasar de 10
      if (estudiantes[i].nota > 10) {
        estudiantes[i].nota = 10;
      }
    }
  }

  console.log(estudiantes);
}


// ---------- Base De Datos De Películas ----------

function baseDeDatosDePeliculas() {
  let peliculas = [
    { titulo: "Interestelar", rating: 5, loHasVisto: true },
    { titulo: "Avatar", rating: 4, loHasVisto: false },
    { titulo: "Rápidos y furiosos", rating: 3, loHasVisto: true },
    { titulo: "Titanic", rating: 5, loHasVisto: false }
  ];

  for (let i = 0; i < peliculas.length; i++) {
    let pelicula = peliculas[i];

    if (pelicula.loHasVisto) {
      console.log(`Viste "${pelicula.titulo}" - ${pelicula.rating} estrellas`);
    } else {
      console.log(`No viste "${pelicula.titulo}" - ${pelicula.rating} estrellas`);
    }
  }
}


// ---------- Números Duplicados ----------

function numerosDuplicados() {
  let numeros = [2, 4, 5, 37, 0]
  let numeros_duplicados = {}

  // cada número pasa a ser una propiedad y su valor es el doble
  for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    numeros_duplicados[numero] = numero * 2;
  }

  console.log(numeros_duplicados);
}


// ---------- Desafío + 27 🎂 ----------

function desafioMasDe27() {
  let personas = [
    { nombre: 'Ana', edad: '28' },
    { nombre: 'María', edad: '24' },
    { nombre: 'José', edad: '31' }
  ];

  // la edad viene como string, por eso la paso a número antes de comparar
  let personasConMasDe27 = personas.filter(persona => Number(persona.edad) > 27);

  console.log(personasConMasDe27);
}


// ---------- Camino Al Oscar ----------

function caminoAlOscar() {
  let actoresVocales = []

  let actoresPrincipales = ['Tom Hanks', 'Johnny Depp', 'Elizabeth Taylor', 'Morgan Freeman', 'Jennifer Aniston', 'Meryl Streep', 'Natalie Portman', 'Ashton Kutcher']

  let peliculas = []

  let actoresPrincipalesPorPelicula = {
    "Titanic": "Leonardo DiCaprio",
    "El Padrino": "Al Pacino",
    "Matrix": "Keanu Reeves",
    "Iron Man": "Robert Downey Jr",
    "Soy leyenda": "Will Smith",
    "Bastardos sin gloria": "Brad Pitt"
  }

  // 1) actores con nombre o apellido que empieza con vocal
  let vocales = "AEIOU";
  for (let i = 0; i < actoresPrincipales.length; i++) {
    let palabras = actoresPrincipales[i].split(" ");
    let nombre = palabras[0];
    let apellido = palabras[1];

    if (vocales.includes(nombre[0]) || vocales.includes(apellido[0])) {
      actoresVocales.push(actoresPrincipales[i]);
    }
  }
  console.log("actoresVocales:", actoresVocales);

  // 2) y 3) recorro el objeto: sumo los actores a actoresPrincipales
  // y los títulos al arreglo peliculas
  for (let pelicula in actoresPrincipalesPorPelicula) {
    actoresPrincipales.push(actoresPrincipalesPorPelicula[pelicula]);
    peliculas.push(pelicula);
  }
  console.log("actoresPrincipales:", actoresPrincipales);
  console.log("peliculas:", peliculas);

  // 4), 5) y 6) objeto con el actor como clave y sus películas como valor.
  // Uso un arreglo para que un actor pueda tener más de una película.
  let peliculaPorActor = {};
  for (let pelicula in actoresPrincipalesPorPelicula) {
    let actor = actoresPrincipalesPorPelicula[pelicula];

    if (peliculaPorActor[actor] === undefined) {
      peliculaPorActor[actor] = [];
    }
    peliculaPorActor[actor].push(pelicula);
  }
  console.log("peliculaPorActor:", peliculaPorActor);
}


// ---------- Posición Adecuada ----------

function posicionAdecuada() {
  let personas = [
    { nombre: "Alba", edad: 15 },
    { nombre: "Estrella", edad: 30 },
    { nombre: "Belen", edad: 20 },
    { nombre: "Santiago", edad: 4 },
    { nombre: "Katherine", edad: 55 }
  ];

  // ordeno de menor a mayor por edad
  personas.sort(function (a, b) {
    return a.edad - b.edad;
  });

  // ahora que están ordenadas, la posición es el índice
  for (let i = 0; i < personas.length; i++) {
    personas[i].posicion = i;
  }

  console.log(personas);
}


// ---------- 🚀 Software Factory ----------

// Devuelve un arreglo nuevo con el nombre de cada producto y el valor total de su stock
function valorTotalPorProducto(productos) {
  let totales = [];

  for (let i = 0; i < productos.length; i++) {
    totales.push({
      nombre: productos[i].nombre,
      total: productos[i].precio * productos[i].articulos
    });
  }

  return totales;
}

function softwareFactory() {
  let ecommerce = [
    { nombre: "Samsung TV", precio: 6000, articulos: 10 },
    { nombre: "DELL notebook", precio: 4000, articulos: 30 },
    { nombre: "Auriculares Sony", precio: 1500, articulos: 15 },
    { nombre: "Monitor Philips", precio: 12000, articulos: 20 },
    { nombre: "Teclado logitech", precio: 3000, articulos: 5 }
  ];

  let totales = valorTotalPorProducto(ecommerce);
  console.log(totales);

  // la lista con cada artículo y su total
  totales.forEach(function (producto) {
    console.log(`${producto.nombre}: $${producto.total}`);
  });
}


// ---------- 🚀 Contar caracteres ----------

function contarCaracteres(cadena) {
  let conteo = {};

  for (let i = 0; i < cadena.length; i++) {
    let letra = cadena[i];

    if (conteo[letra] === undefined) {
      conteo[letra] = 1;   // primera vez que aparece
    } else {
      conteo[letra]++;     // ya estaba, le sumo uno
    }
  }

  return conteo;
}

function probarContarCaracteres() {
  let result1 = contarCaracteres('banana');
  console.log('should log "{b: 1, a: 3, n: 2}":', result1);

  let result2 = contarCaracteres('');
  console.log('should log "{}":', result2);

  let palabra = prompt("Escribí una palabra y te cuento sus letras");
  console.log(`contarCaracteres("${palabra}"):`, contarCaracteres(palabra));
}
