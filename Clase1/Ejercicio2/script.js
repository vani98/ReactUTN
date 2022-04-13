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

let submitNombreJugador = document.getElementById("submit_nombre_jugador");
let inputNombreJugador = document.getElementById("input_nombre_jugador");
let formConsultaNombre = document.getElementById("form_consulta_nombre");
let eliminarResultado = document.getElementById("vaciar_busqueda");

submitNombreJugador.addEventListener("click", handleJugadorClick);
inputNombreJugador.addEventListener("input", handleInput);
eliminarResultado.addEventListener("click", handleEliminarResultado);

function handleJugadorClick(e) {
  e.preventDefault();
  let jugadorIngresado = inputNombreJugador.value.trim().toUpperCase();
  buscarJugador(equipo, jugadorIngresado);
  inputNombreJugador.value = "";
  submitNombreJugador.disabled = true;
}

//Funcion indicada

let jugadorResultado = document.createElement("p");

function buscarJugador(equipo, jugadorIngresado) {
  let mostrarResultado = formConsultaNombre.insertAdjacentElement(
    "afterend",
    jugadorResultado
  );
  if (jugadorIngresado != "") {
    let jugadorEncontrado = equipo.find(
      (jugador) => jugador.nombre === jugadorIngresado
    );
    if (jugadorEncontrado === undefined) {
      jugadorResultado.textContent = `NO encontramos al jugador  ${jugadorIngresado} en nuestro equipo`;
      jugadorResultado.className = "jugador_resultado jugador_no_encontrado";
      return jugadorResultado;
    } else {
      jugadorResultado.textContent = `Encontramos al jugador ${
        jugadorEncontrado.nombre
      } en el equipo! Actualmente tiene ${
        jugadorEncontrado.edad
      } años y juega con la camiseta Nº ${
        jugadorEncontrado.numeroDeCamiseta
      }. Estado: ${
        jugadorEncontrado.estaLesionado ? "lesionado" : "sin lesiones"
      }`;
      jugadorResultado.className = "jugador_resultado jugador_encontrado";
      return jugadorResultado;
    }
  }
}

function handleInput(e) {
  console.log(e.target.value);
  if (e.target.value !== "") {
    submitNombreJugador.disabled = false;
  }
}
function handleEliminarResultado() {
  jugadorResultado.remove();
}

/*
3.Codificar una función con la siguiente cabecera: filtroJugadores(equipo, edad). En ella, se recibe un array de jugadores (objetos instanciados empleando la clase de la actividad 3), y una edad. La función retorna los jugadores cuya edad coincide con el segundo parámetro. Realizar al menos cinco (5) filtros solicitando la edad al usuario, e informar sobre el resultado de los jugadores filtrados.
Atención a la hora de crear el código, mucho de ello puede ser reutilizado sonrisa 
*/

//filter

// let submitNombreJugador = document.getElementById("submitNombreJugador");
// let inputNombreJugador = document.getElementById("inputNombreJugador");
// let FormEdadJugador = document.getElementById("FormEdadJugador");
