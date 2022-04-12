//TODO: Consignas

/*

1. Declarar una clase Jugador que permita registrar nombre, número de camiseta, edad, y si está lesionado. Luego instanciar al menos cinco (5) objetos usando esta clase, y asociarlos a un array.

2. Codificar una función con la siguiente cabecera: buscarJugador(equipo, jugador). En ella, se recibe por parámetro un array de jugadores (objetos instanciados empleando la clase de la actividad 3), y el nombre de un jugador. La función retorna el jugador que coincide con el nombre. Realizar al menos tres (3) búsquedas solicitando el nombre al usuario, e informar sobre el resultado de cada búsqueda.

3.Codificar una función con la siguiente cabecera: filtroJugadores(equipo, edad). En ella, se recibe un array de jugadores (objetos instanciados empleando la clase de la actividad 3), y una edad. La función retorna los jugadores cuya edad coincide con el segundo parámetro. Realizar al menos cinco (5) filtros solicitando la edad al usuario, e informar sobre el resultado de los jugadores filtrados.
Atención a la hora de crear el código, mucho de ello puede ser reutilizado sonrisa 

*/

const equipo = [];

class Jugador {
  constructor(nombre, numeroDeCamiseta, edad, estaLesionado = false) {
    this.nombre = nombre.trim().toUpperCase();
    this.numeroDeCamiseta = Number(numeroDeCamiseta);
    this.edad = Number(edad);
    this.estaLesionado = estaLesionado;
  }
}

const jugador1 = new Jugador("Lionel Messi", 10, 34);
equipo.push(jugador1);
console.log(equipo);
