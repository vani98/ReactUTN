//TODO: Consignas

/*
1. Declarar una clase Jugador que permita registrar nombre, número de camiseta, edad, y si está lesionado. Luego instanciar al menos cinco (5) objetos usando esta clase, y asociarlos a un array.
*/

const equipo = [];

class Jugador {
  constructor(nombre, numeroDeCamiseta, edad, estaLesionado = false) {
    this.nombre = nombre.trim().toUpperCase();
    this.numeroDeCamiseta = Number(numeroDeCamiseta);
    this.edad = Number(edad);
    this.estaLesionado = Boolean(estaLesionado);
  }
}

const jugador1 = new Jugador("Lionel Messi", 10, 34);
equipo.push(jugador1);

const jugador2 = new Jugador("Nicolas Otamendi", 19, 34);
equipo.push(jugador2);

const jugador3 = new Jugador("Leandro Paredes", 5, 27, true);
equipo.push(jugador3);

const jugador4 = new Jugador("Lisandro Martinez", 22, 24, true);
equipo.push(jugador4);

const jugador5 = new Jugador("Angel Di Maria", 11, 34);
equipo.push(jugador5);

/*
2. Codificar una función con la siguiente cabecera: buscarJugador(equipo, jugador). En ella, se recibe por parámetro un array de jugadores (objetos instanciados empleando la clase de la actividad 3), y el nombre de un jugador. La función retorna el jugador que coincide con el nombre. Realizar al menos tres (3) búsquedas solicitando el nombre al usuario, e informar sobre el resultado de cada búsqueda.
*/

let formConsultaNombre = document.getElementById("form_consulta_nombre");
let inputNombreJugador = document.getElementById("input_nombre_jugador");
let submitNombreJugador = document.getElementById("submit_nombre_jugador");
let eliminarNombreResultado = document.getElementById("vaciar_nombre_busqueda");

submitNombreJugador.addEventListener("click", handleNombreJugadorClick);
inputNombreJugador.addEventListener("input", handleInputNombre);
eliminarNombreResultado.addEventListener(
  "click",
  handleEliminarNombreResultado
);

function handleNombreJugadorClick(e) {
  e.preventDefault();
  let jugadorIngresado = inputNombreJugador.value.trim().toUpperCase();
  buscarJugador(equipo, jugadorIngresado);
  inputNombreJugador.value = "";
  submitNombreJugador.disabled = true;
}

let nombreResultado = document.createElement("p");

function buscarJugador(equipo, jugadorIngresado) {
  let mostrarResultado = formConsultaNombre.insertAdjacentElement(
    "afterend",
    nombreResultado
  );
  if (jugadorIngresado != "") {
    let jugadorEncontrado = equipo.find(
      (jugador) => jugador.nombre === jugadorIngresado
    );
    if (jugadorEncontrado === undefined) {
      nombreResultado.textContent = `NO encontramos al jugador  ${jugadorIngresado} en nuestro equipo`;
      nombreResultado.className = "jugador_resultado jugador_no_encontrado";
      return nombreResultado;
    } else {
      nombreResultado.textContent = `Encontramos al jugador ${
        jugadorEncontrado.nombre
      } en el equipo! Actualmente tiene ${
        jugadorEncontrado.edad
      } años y juega con la camiseta Nº ${
        jugadorEncontrado.numeroDeCamiseta
      }. Estado: ${
        jugadorEncontrado.estaLesionado ? "lesionado" : "sin lesiones"
      }`;
      nombreResultado.className = "jugador_resultado jugador_encontrado";
      return nombreResultado;
    }
  }
}

function handleInputNombre(e) {
  if (e.target.value !== "") {
    submitNombreJugador.disabled = false;
  }
}
function handleEliminarNombreResultado() {
  nombreResultado.remove();
}

/*
3.Codificar una función con la siguiente cabecera: filtroJugadores(equipo, edad). En ella, se recibe un array de jugadores (objetos instanciados empleando la clase de la actividad 3), y una edad. La función retorna los jugadores cuya edad coincide con el segundo parámetro. Realizar al menos cinco (5) filtros solicitando la edad al usuario, e informar sobre el resultado de los jugadores filtrados.
Atención a la hora de crear el código, mucho de ello puede ser reutilizado sonrisa 
*/

let formConsultaEdad = document.getElementById("form_consulta_edad");
let inputEdadJugador = document.getElementById("input_edad_jugador");
let submitEdadJugador = document.getElementById("submit_edad_jugador");
let eliminarEdadResultado = document.getElementById("vaciar_edad_busqueda");

submitEdadJugador.addEventListener("click", handleEdadJugadorClick);
inputEdadJugador.addEventListener("input", handleInputEdad);
eliminarEdadResultado.addEventListener("click", handleEliminarEdadResultado);

function handleEdadJugadorClick(e) {
  e.preventDefault();
  let edadIngresada = parseInt(inputEdadJugador.value);
  filtroJugadores(equipo, edadIngresada);
  inputEdadJugador.value = "";
  submitEdadJugador.disabled = true;
}

let edadResultado = document.createElement("p");
function filtroJugadores(equipo, edadIngresada) {
  let jugadoresEncontrados = equipo.filter(
    (jugador) => jugador.edad === edadIngresada
  );
  let mostrarEdad = formConsultaEdad.insertAdjacentElement(
    "afterend",
    edadResultado
  );
  let mapeoNombres = jugadoresEncontrados.map((jugador) =>
    jugador.nombre.toLowerCase()
  );
  if (jugadoresEncontrados.length !== 0) {
    edadResultado.innerText = `La edad ingresada(${edadIngresada}) ha coincidido con la edad de: ${mapeoNombres}`;
    edadResultado.className = "jugador_encontrado";
    return mostrarEdad;
  } else {
    edadResultado.innerText = `La edad ingresada(${edadIngresada}) no coincide con ninguno de nuestros jugadores`;
    edadResultado.className = "jugador_no_encontrado";
    return mostrarEdad;
  }
}
function handleInputEdad(e) {
  if (e.target.value !== "") {
    submitEdadJugador.disabled = false;
  }
}
function handleEliminarEdadResultado() {
  edadResultado.remove();
}
