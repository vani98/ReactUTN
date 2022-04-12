//TODO: Consignas

/*
1. Declarar una clase Jugador que permita registrar nombre, número de camiseta, edad, y si está lesionado. Luego instanciar al menos cinco (5) objetos usando esta clase, y asociarlos a un array.

3.Codificar una función con la siguiente cabecera: filtroJugadores(equipo, edad). En ella, se recibe un array de jugadores (objetos instanciados empleando la clase de la actividad 3), y una edad. La función retorna los jugadores cuya edad coincide con el segundo parámetro. Realizar al menos cinco (5) filtros solicitando la edad al usuario, e informar sobre el resultado de los jugadores filtrados.
Atención a la hora de crear el código, mucho de ello puede ser reutilizado sonrisa 
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

// RETORNA JUGADOR COINCIDE - nombreJUGADOR

function buscarJugador(equipo, jugador) {
  if (jugador !== "") {
  }
  return alert("Ingrese un jugador");
}

buscarJugador(
  equipo,
  prompt("Ingrese el nombre del jugador buscado").trim().toUpperCase()
);
