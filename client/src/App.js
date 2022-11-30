import "./App.css";
import Banner from "./components/Banner";
import Colores from "./components/Colores";
import Cotizacion from "./components/Cotizacion";
import Cotizar from "./components/Cotizar";
import FondoPrenda from "./components/FondoPrenda";
import Header from "./components/Header";
import Tamano from "./components/Tamano";
import Tipo from "./components/Tipo";
import { useState } from "react";
import { BoolHook } from "./hooks/BoolHook.js";
import { useApi } from "./hooks/useApi";

function App() {

  const [valores, setValores] = useApi(); //hook que se conecta al backend para devolver los precios de cada cosa
  const [resultados, setResultados] = BoolHook(false);//hook que controla que se muestro u oculten los resultados
  const [elecciones, setElecciones] = useState(    //Hook encargado de actualizar las opciones elegidas
    {
    fondo: null,
    colores: null,
    prendas: null,
    estampado: null,
    pintura: null,
    opciones: [false, false],
    cotizacion: 1
  })



  return (
    <div className="App">
      <Header />
      <div className="container app-container">
        <FondoPrenda  resultados={resultados} setResultados={setResultados} setElecciones={setElecciones} />
        <Colores resultados={resultados} setResultados={setResultados} setElecciones={setElecciones} />
        <Tamano resultados={resultados} setResultados={setResultados} setElecciones={setElecciones} />
        <Tipo resultados={resultados} setResultados={setResultados} setElecciones={setElecciones} />
        <Cotizar resultados={resultados} setResultados={setResultados} elecciones={elecciones} valores={valores} setElecciones={setElecciones} setValores={setValores}/>
      </div>
      <div className="container cotizacion-container" id="cotizacion">

        {resultados && (
          <>
            <Banner elecciones={elecciones} />
            <Cotizacion valores={valores} elecciones={elecciones}/>
          </>
        )}


      </div>
    </div>
  );
}

export default App;
