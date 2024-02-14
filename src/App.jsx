import Header from "./components/Header";
import Accordion from "./components/Accordion";
import data from "./data";

// App engloba el titulo de la pagina, Header, y el acordeón como componente general.

function App() {
  return (
    <div className="container">
      <Header />
      <Accordion data={data} />
    </div>
  );
}

export default App;
