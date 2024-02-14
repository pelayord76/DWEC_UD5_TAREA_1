import { useState } from "react";

// este componente define las secciones individuales del acordeon, muestra cada pregunta y, tras pulsar sobre la misma, su respuesta. recibe como parámetros la pregunta y la respuesta, que se los pasa el componente accordion.

export const AccordionItem = ({ pregunta, respuesta }) => {
  //variables para saber si un item está abierto o no y para establecer que lo esté si se requiere para aplicar los estilos que hacen que aparezcan y desaparezcan las respuestas.
  const [abierto, setAbierto] = useState(false);

  // funcion flecha para cambiar el estado de un item al contrario, se llamara a esta funcion siempre que se pulse en una pregunta
  const cambiar = () => {
    setAbierto(!abierto);
  };

  return (
    //se usa un if en el nombre de la clase para saber si el item esta abierto o no, para aplicarle los estilos.
    //el span para el simbolo del boton comprueba si está abierto, en caso afirmativo pone un -, si es negativo un +.
    <li className={`accordion_item ${abierto ? "active" : ""}`}>
      <button className="button" onClick={cambiar}>
        <span>{pregunta}</span>
        <span>{abierto ? "-" : "+"}</span>
      </button>
      <div className={`answer_wrapper ${abierto ? "open" : ""}`}>
        <div className="answer">{respuesta}</div>
      </div>
    </li>
  );
};
