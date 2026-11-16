// ============================================================
//  unidad.js - ayudante que comparten las páginas de las unidades
//
//  Los ejercicios de JS usan console.log, alert y prompt.
//  Para poder probarlos sin abrir la consola, este archivo:
//   1) le agrega a cada ejercicio los botones "Ejecutar" y "Ver código"
//   2) copia en la página lo que sale por console.log, alert y prompt
//   3) corta el ejercicio si se toca "Cancelar" en un prompt
// ============================================================

let salidaActual = null;    // caja donde escribe el ejercicio que está corriendo
let lineasPendientes = [];  // lo que salió por consola desde el último cartel

// Guardo las funciones originales para poder seguir usándolas
const logOriginal = console.log;
const alertOriginal = window.alert;
const promptOriginal = window.prompt;


// Pasa cualquier valor a un texto fácil de leer
function aTexto(valor) {
  if (typeof valor === "string") {
    return valor;
  }
  if (valor instanceof DOMTokenList) {
    return "DOMTokenList [" + Array.from(valor).join(", ") + "]";
  }
  if (Array.isArray(valor)) {
    let tieneObjetos = valor.some(function (elemento) {
      return typeof elemento === "object" && elemento !== null;
    });
    if (tieneObjetos) {
      // un objeto por renglón
      let renglones = valor.map(function (elemento) {
        return "  " + JSON.stringify(elemento);
      });
      return "[\n" + renglones.join(",\n") + "\n]";
    }
    let elementos = valor.map(function (elemento) {
      return typeof elemento === "string" ? '"' + elemento + '"' : String(elemento);
    });
    return "[" + elementos.join(", ") + "]";
  }
  if (typeof valor === "object" && valor !== null) {
    // una propiedad por renglón
    let renglones = Object.keys(valor).map(function (clave) {
      return "  " + clave + ": " + JSON.stringify(valor[clave]);
    });
    if (renglones.length === 0) {
      return "{}";
    }
    return "{\n" + renglones.join(",\n") + "\n}";
  }
  return String(valor);
}


// Escribe un renglón en la caja del ejercicio que está corriendo
function escribir(texto, tipo) {
  if (salidaActual === null) {
    return;
  }
  let linea = document.createElement("div");
  linea.className = "linea-" + tipo;
  linea.textContent = texto;
  salidaActual.appendChild(linea);
}


// Mientras hay un alert o un prompt abierto la página no se actualiza,
// así que le sumo al cartel lo último que salió por consola.
function conConsola(mensaje) {
  if (lineasPendientes.length === 0) {
    return mensaje;
  }
  let ultimas = lineasPendientes.slice(-15);
  lineasPendientes = [];
  return "📟 Consola:\n" + ultimas.join("\n") + "\n\n" + mensaje;
}


console.log = function (...valores) {
  logOriginal.apply(console, valores);
  let texto = valores.map(aTexto).join(" ");
  if (salidaActual !== null) {
    escribir(texto, "log");
    lineasPendientes.push(texto);
  }
};


window.alert = function (mensaje) {
  escribir("🔔 " + mensaje, "alert");
  alertOriginal.call(window, conConsola(mensaje));
};


window.prompt = function (mensaje, valorInicial) {
  let respuesta = promptOriginal.call(window, conConsola(mensaje), valorInicial);
  if (respuesta === null) {
    // tocaron "Cancelar": corto el ejercicio
    throw new Error("CANCELADO");
  }
  escribir("❓ " + mensaje + " → " + respuesta, "prompt");
  return respuesta;
};


// Corre la función de un ejercicio y muestra lo que devuelve por consola
function ejecutar(nombreFuncion, salida) {
  salida.innerHTML = "";
  salida.classList.add("visible");
  salidaActual = salida;
  lineasPendientes = [];

  try {
    window[nombreFuncion]();
  } catch (error) {
    if (error.message === "CANCELADO") {
      escribir("Cancelaste el ejercicio.", "info");
    } else {
      escribir("Error: " + error.message, "error");
    }
  }

  // si el ejercicio no escribió nada, escondo la caja
  if (salida.children.length === 0) {
    salida.classList.remove("visible");
  }
  salidaActual = null;
}


// Arma los botones de cada tarjeta de ejercicio
document.querySelectorAll(".ejercicio").forEach(function (tarjeta) {
  let nombreFuncion = tarjeta.dataset.fn;                       // función que se ejecuta
  let funcionesCodigo = tarjeta.dataset.codigo || nombreFuncion; // funciones que se muestran

  let salida = document.createElement("div");
  salida.className = "salida";

  let codigo = document.createElement("pre");
  codigo.className = "codigo";

  // si la tarjeta no trae su fila de botones, la creo
  let botones = tarjeta.querySelector(".botones");
  if (botones === null) {
    botones = document.createElement("div");
    botones.className = "botones";
    tarjeta.appendChild(botones);
  }

  // botón "Ejecutar"
  if (nombreFuncion) {
    let botonEjecutar = document.createElement("button");
    botonEjecutar.className = "btn-ejecutar";
    botonEjecutar.textContent = "▶ Ejecutar";
    botonEjecutar.addEventListener("click", function () {
      ejecutar(nombreFuncion, salida);
    });
    botones.appendChild(botonEjecutar);
  }

  // botones propios de la tarjeta (los pasos de la U13)
  tarjeta.querySelectorAll("button[data-ejecutar]").forEach(function (boton) {
    boton.addEventListener("click", function () {
      ejecutar(boton.dataset.ejecutar, salida);
    });
  });

  // botón "Ver código"
  if (funcionesCodigo) {
    let botonCodigo = document.createElement("button");
    botonCodigo.className = "btn-codigo";
    botonCodigo.textContent = "</> Ver código";
    botonCodigo.addEventListener("click", function () {
      let nombres = funcionesCodigo.split(",");
      let textos = nombres.map(function (nombre) {
        return window[nombre.trim()].toString();
      });
      codigo.textContent = textos.join("\n\n");
      codigo.classList.toggle("visible");
    });
    botones.appendChild(botonCodigo);
  }

  tarjeta.appendChild(salida);
  tarjeta.appendChild(codigo);
});
