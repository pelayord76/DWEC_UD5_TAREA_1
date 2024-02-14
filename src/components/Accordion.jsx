import AccordionItem from "./AccordionItem";

// este componente acordeon se encarga de recibir los datos de preguntas y respuestas definidas en un archivo llamado data. recorre este archivo (que tiene un array de items) y crea tantos items como haya en data, basándose en otro componente más, accordionItem.

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem
          key={i}
          pregunta={item.pregunta}
          respuesta={item.respuesta}
        />
      ))}
    </div>
  );
}

export default Accordion;
