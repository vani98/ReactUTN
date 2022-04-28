import React from "react";
import "./styles.css";
import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div className="wrapper">
      <h1>Contador</h1>
      <p>Este es un contador con funcionalidad</p>
      <form className="formulario-contador">
        <label>El valor del contador es: {contador}</label>
        <div>
          <input
            type="button"
            value="Aumentar el valor!"
            onClick={() => setContador(contador + 1)}
          />
          <input
            type="button"
            name="disminuyo"
            value="Disminuir el valor!"
            onClick={() => setContador(contador - 1)}
          />
          <input type="button" value="Reset" onClick={() => setContador(0)} />
        </div>
      </form>
    </div>
  );
};

export default Contador;
