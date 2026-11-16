// U13 - DOM (Document Object Model)
// Ejercicios de la unidad. Cada función es lo que en la consigna se hacía "por consola".


// ---------- Manipular Texto Y Contenido ----------

// 1) Cambio el texto del título
function cambiarTextoDelTitulo() {
  let titulo = document.querySelector("#escenario-texto h1");

  if (titulo === null) {
    console.log("Ya no hay título, tocá Reiniciar para volver a empezar.");
    return;
  }

  titulo.textContent = "¡Cambié el título desde JavaScript!";
}

// 2) Cambio el título por un párrafo
function cambiarTituloPorParrafo() {
  let escenario = document.querySelector("#escenario-texto");
  let titulo = escenario.querySelector("h1");

  if (titulo === null) {
    console.log("Ya no hay título, tocá Reiniciar para volver a empezar.");
    return;
  }

  let parrafo = document.createElement("p");
  parrafo.textContent = "Antes acá había un título, ahora soy un párrafo.";
  escenario.replaceChild(parrafo, titulo);
}

// 3) Agrego otro párrafo al final
function agregarOtroParrafo() {
  let escenario = document.querySelector("#escenario-texto");

  let parrafo = document.createElement("p");
  parrafo.textContent = "Y yo soy otro párrafo, agregado con appendChild().";
  escenario.appendChild(parrafo);
}

// Deja todo como al principio
function reiniciarTexto() {
  let escenario = document.querySelector("#escenario-texto");
  escenario.innerHTML = "<h1>Soy un título</h1>";
}


// ---------- ¡Shuffle! ----------

function shuffle() {
  let source = document.querySelector("#source");
  let destination = document.querySelector("#destination");

  // guardo uno de los textos para no perderlo cuando lo piso
  let guardado = source.textContent;
  source.textContent = destination.textContent;
  destination.textContent = guardado;
}


// ---------- Manipular CSS ----------

let cuadrado = document.querySelector("#cuadrado");
let intervalo = null;  // acá guardo el setInterval para poder frenarlo

// 1) Le doy alto, ancho y color con la propiedad style
function darEstiloConStyle() {
  cuadrado.style.height = "120px";
  cuadrado.style.width = "120px";
  cuadrado.style.backgroundColor = "#ff6600";
}

// 2) Lo mismo pero con la clase .square (está en style.css)
function usarClaseSquare() {
  // primero saco lo que le puse con style
  cuadrado.style.height = "";
  cuadrado.style.width = "";
  cuadrado.style.backgroundColor = "";

  cuadrado.classList.add("square");
}

// 3) ¿Qué devuelve div.classList?
function verClassList() {
  console.log(cuadrado.classList);
}

// 4) Le saco la clase
function sacarClaseSquare() {
  cuadrado.classList.remove("square");
}

// 5) Si tiene la clase se la saco, y si no la tiene se la pongo
function alternarSquare() {
  if (cuadrado.classList.contains("square")) {
    cuadrado.classList.remove("square");
  } else {
    cuadrado.classList.add("square");
  }
}

// Repite alternarSquare cada un segundo
function empezarParpadeo() {
  if (intervalo === null) {
    intervalo = setInterval(alternarSquare, 1000);
  }
}

function frenarParpadeo() {
  clearInterval(intervalo);
  intervalo = null;
}


// ---------- Formulario E Input ----------

// Arma todo el formulario desde JavaScript (el HTML arranca vacío)
function crearFormulario() {
  let escenario = document.querySelector("#escenario-formulario");

  let formulario = document.createElement("form");

  // Nombre y apellido, con su label
  let labelNombre = document.createElement("label");
  labelNombre.textContent = "Nombre y apellido";
  labelNombre.setAttribute("for", "nombre");
  labelNombre.className = "form-label";

  let inputNombre = document.createElement("input");
  inputNombre.type = "text";
  inputNombre.id = "nombre";
  inputNombre.className = "form-control mb-3";

  formulario.appendChild(labelNombre);
  formulario.appendChild(inputNombre);

  // E-mail, con placeholder
  let inputEmail = document.createElement("input");
  inputEmail.type = "email";
  inputEmail.id = "email";
  inputEmail.placeholder = "Escribí tu e-mail";
  inputEmail.className = "form-control mb-3";

  formulario.appendChild(inputEmail);

  // Género: radio buttons
  let tituloGenero = document.createElement("p");
  tituloGenero.textContent = "Género";
  tituloGenero.className = "mb-1";
  formulario.appendChild(tituloGenero);

  let generos = ["Femenino", "Masculino", "No binario", "Prefiero no decirlo"];

  for (let i = 0; i < generos.length; i++) {
    let opcion = document.createElement("div");
    opcion.className = "form-check";

    let radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "genero";
    radio.value = generos[i];
    radio.id = "genero" + i;
    radio.className = "form-check-input";

    let labelRadio = document.createElement("label");
    labelRadio.textContent = generos[i];
    labelRadio.setAttribute("for", "genero" + i);
    labelRadio.className = "form-check-label";

    opcion.appendChild(radio);
    opcion.appendChild(labelRadio);
    formulario.appendChild(opcion);
  }

  // Rango de edad: dropdown
  let labelEdad = document.createElement("label");
  labelEdad.textContent = "Rango de edad";
  labelEdad.setAttribute("for", "edad");
  labelEdad.className = "form-label mt-3";

  let selectEdad = document.createElement("select");
  selectEdad.id = "edad";
  selectEdad.className = "form-control mb-3";

  let rangos = ["Menor a 18", "19-30", "31-45", "46-55", "Mayor a 56"];

  for (let i = 0; i < rangos.length; i++) {
    let opcion = document.createElement("option");
    opcion.textContent = rangos[i];
    opcion.value = rangos[i];
    selectEdad.appendChild(opcion);
  }

  formulario.appendChild(labelEdad);
  formulario.appendChild(selectEdad);

  // Checkbox: ¿es argentino/a?
  let cajaArgentino = document.createElement("div");
  cajaArgentino.className = "form-check";

  let checkArgentino = document.createElement("input");
  checkArgentino.type = "checkbox";
  checkArgentino.id = "argentino";
  checkArgentino.className = "form-check-input";

  let labelArgentino = document.createElement("label");
  labelArgentino.textContent = "Soy argentino/a";
  labelArgentino.setAttribute("for", "argentino");
  labelArgentino.className = "form-check-label";

  cajaArgentino.appendChild(checkArgentino);
  cajaArgentino.appendChild(labelArgentino);
  formulario.appendChild(cajaArgentino);

  escenario.appendChild(formulario);
}

// Lee lo que se completó en el formulario y lo muestra por consola
function obtenerDatosDelFormulario() {
  let nombre = document.querySelector("#nombre").value;
  let email = document.querySelector("#email").value;
  let rangoDeEdad = document.querySelector("#edad").value;
  let esArgentino = document.querySelector("#argentino").checked;

  // el radio que está marcado (si no marcaron ninguno da null)
  let radioElegido = document.querySelector('input[name="genero"]:checked');
  let genero = radioElegido === null ? "(no eligió ninguno)" : radioElegido.value;

  console.log("Nombre y apellido:", nombre);
  console.log("E-mail:", email);
  console.log("Género:", genero);
  console.log("Rango de edad:", rangoDeEdad);
  console.log("¿Es argentino/a?:", esArgentino);
}


// Cuando carga la página armo el formulario
crearFormulario();
