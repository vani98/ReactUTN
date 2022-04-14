//TODO: Consignas

/*
1) Declarar una clase Jugador que permita registrar nombre, número de camiseta, edad, y si está lesionado. Luego instanciar al menos cinco (5) objetos usando esta clase, y asociarlos a un array.
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

// const jugador1 = new Jugador("Lionel Messi", 10, 34);
const jugador1 = new Jugador("qwer", 10, 34);
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
2) Codificar una función con la siguiente cabecera: buscarJugador(equipo, jugador). En ella, se recibe por parámetro un array de jugadores (objetos instanciados empleando la clase de la actividad 3), y el nombre de un jugador. La función retorna el jugador que coincide con el nombre. Realizar al menos tres (3) búsquedas solicitando el nombre al usuario, e informar sobre el resultado de cada búsqueda.
*/

// Nombres probados: "lionel messi", "javier mascherano", "leandro paredes"

const FORM_CONSULTA_NOMBRE = document.getElementById("form_consulta_nombre");
const INPUT_NOMBRE_JUGADOR = document.getElementById("input_nombre_jugador");
const SUBMIT_NOMBRE_JUGADOR = document.getElementById("submit_nombre_jugador");
const ELIMINAR_NOMBRE_RESULTADO = document.getElementById(
  "vaciar_nombre_busqueda"
);

SUBMIT_NOMBRE_JUGADOR.addEventListener("click", handleBuscarNombreJugador);
INPUT_NOMBRE_JUGADOR.addEventListener("input", handleInputNombre);
ELIMINAR_NOMBRE_RESULTADO.addEventListener(
  "click",
  handleEliminarRespuestaNombre
);

function handleBuscarNombreJugador(e) {
  e.preventDefault();
  const JUGADOR = INPUT_NOMBRE_JUGADOR.value.trim().toUpperCase();
  buscarJugador(equipo, JUGADOR);
  INPUT_NOMBRE_JUGADOR.value = "";
  SUBMIT_NOMBRE_JUGADOR.disabled = true;
}

let nombreResultado = document.createElement("p");

function buscarJugador(equipo, jugadorIngresado) {
  let jugadorEncontrado = equipo.find(
    jugador => jugador.nombre === jugadorIngresado
  );
  console.log(jugadorEncontrado);

  if (jugadorEncontrado) {
    nombreResultado.textContent = `Encontramos al jugador ${
      jugadorEncontrado.nombre
    } en el equipo! Actualmente tiene ${
      jugadorEncontrado.edad
    } años y juega con la camiseta Nº ${
      jugadorEncontrado.numeroDeCamiseta
    }. Estado: ${
      jugadorEncontrado.estaLesionado ? "lesionado" : "sin lesiones"
    }`;
    nombreResultado.className = "jugador_encontrado";
  } else {
    nombreResultado.textContent = `NO encontramos al jugador ${jugadorIngresado} en nuestro equipo`;
    nombreResultado.className = "jugador_no_encontrado";
  }

  FORM_CONSULTA_NOMBRE.insertAdjacentElement("afterend", nombreResultado);
}

function handleInputNombre({ target: { value } }) {
  if (value.trim()) {
    SUBMIT_NOMBRE_JUGADOR.disabled = false;
  }
}

function handleEliminarRespuestaNombre() {
  nombreResultado.remove();
}

/*
3) Codificar una función con la siguiente cabecera: filtroJugadores(equipo, edad). En ella, se recibe un array de jugadores (objetos instanciados empleando la clase de la actividad 3), y una edad. La función retorna los jugadores cuya edad coincide con el segundo parámetro. Realizar al menos cinco (5) filtros solicitando la edad al usuario, e informar sobre el resultado de los jugadores filtrados.
Atención a la hora de crear el código, mucho de ello puede ser reutilizado sonrisa 
*/

// Edades probadas: 34, 20, 27, 18, 24

let FORM_CONSULTA_EDAD = document.getElementById("form_consulta_edad");
let INPUT_EDAD_JUGADOR = document.getElementById("input_edad_jugador");
let SUBMIT_EDAD_JUGADOR = document.getElementById("submit_edad_jugador");
let ELIMINAR_EDAD_RESULTADO = document.getElementById("vaciar_edad_busqueda");

INPUT_EDAD_JUGADOR.addEventListener("input", handleInputEdad);
SUBMIT_EDAD_JUGADOR.addEventListener("click", handleBuscarPorEdad);
ELIMINAR_EDAD_RESULTADO.addEventListener("click", handleEliminarEdadResultado);

function handleBuscarPorEdad(e) {
  e.preventDefault();
  const EDAD_INGRESADA = Number(INPUT_EDAD_JUGADOR.value);
  filtroJugadores(equipo, EDAD_INGRESADA);
  INPUT_EDAD_JUGADOR.value = "";
  SUBMIT_EDAD_JUGADOR.disabled = true;
}

let edadResultado = document.createElement("p");

function filtroJugadores(equipo, edadIngresada) {
  let jugadoresEncontrados = equipo.filter(
    jugador => jugador.edad === edadIngresada
  );

  let mapeoNombres = jugadoresEncontrados.map(jugador =>
    jugador.nombre.toLowerCase()
  );

  if (jugadoresEncontrados.length) {
    edadResultado.innerText = `La edad ingresada(${edadIngresada}) ha coincidido con la edad de: ${mapeoNombres}`;
    edadResultado.className = "jugador_encontrado";
  } else {
    edadResultado.innerText = `La edad ingresada(${edadIngresada}) no coincide con ninguno de nuestros jugadores`;
    edadResultado.className = "jugador_no_encontrado";
  }

  FORM_CONSULTA_EDAD.insertAdjacentElement("afterend", edadResultado);
}

function handleInputEdad({ target: { value } }) {
  if (value.trim()) {
    SUBMIT_EDAD_JUGADOR.disabled = false;
  }
}

function handleEliminarEdadResultado() {
  edadResultado.remove();
}
