import { Header } from "./components/Header";
import { Accordion } from "./components/Accordion";

// App engloba el titulo de la pagina, Header, y el acordeón como componente general.

export const App = () => {
  return (
    <div className="container">
      <Header />
      <Accordion />
    </div>
  );
};
