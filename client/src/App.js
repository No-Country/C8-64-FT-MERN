import "./App.css";
import Banner from "./components/Banner";
import Colores from "./components/Colores";
import Cotizacion from "./components/Cotizacion";
import Cotizar from "./components/Cotizar";
import FondoPrenda from "./components/FondoPrenda";
import Header from "./components/Header";
import Tamano from "./components/Tamano";
import Tipo from "./components/Tipo";
import { BoolHook } from "./hooks/BoolHook.js";

function App() {
  const [resultados, setResultados] = BoolHook(false);

  const opciones = {
    fondo: "",
    colores: "",
    cantidad: "",
    tamano: "",
    tipo: "",
  };

  return (
    <div className="App">
      <Header />
      <div className="container app-container">
        <FondoPrenda opciones={opciones} resultados={resultados} setResultados={setResultados} />
        <Colores resultados={resultados} setResultados={setResultados} />
        <Tamano resultados={resultados} setResultados={setResultados} />
        <Tipo resultados={resultados} setResultados={setResultados} />
        <Cotizar resultados={resultados} setResultados={setResultados} />
      </div>
      <div className="container cotizacion-container" id="cotizacion">

        {resultados && (
          <>
            <Banner />
            <Cotizacion />
          </>
        )}


      </div>
    </div>
  );
}

export default App;
