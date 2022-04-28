import { useReducer } from "react";
import "./styles.css";

const TYPES = {
  AUMENTO: "aumento",
  DISMINUYO: "disminuyo",
  RESETEO: "reseteo",
};

const contadorReducer = (contador, action) => {
  switch (action.type) {
    case TYPES.AUMENTO:
      return contador + 1;
    case TYPES.DISMINUYO:
      return contador - 1;
    case TYPES.RESETEO:
      return 0;
    default:
      return state;
  }
};

const Contador = () => {
  const [contador, contadorDispatch] = useReducer(contadorReducer, 0);
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
            onClick={() => contadorDispatch({ type: TYPES.AUMENTO })}
          />
          <input
            type="button"
            value="Disminuir el valor!"
            onClick={() => contadorDispatch({ type: TYPES.DISMINUYO })}
          />
          <input
            type="button"
            value="Reset"
            onClick={() => contadorDispatch({ type: TYPES.RESETEO })}
          />
        </div>
      </form>
    </div>
  );
};

export default Contador;
