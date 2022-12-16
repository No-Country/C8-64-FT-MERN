import logo from "../assets/Logo FavIcon.png"
import Banner from "../components/Banner/Banner";
import Colores from "../components/Colores/Colores";
import Cotizacion from "../components/Cotizacion/Cotizacion";
import Cotizar from "../components/Cotizar/Cotizar";
import FondoPrenda from "../components/FondoPrenda/FondoPrenda";
import Header from "../components/Header/Header";
import Tamano from "../components/Tamano/Tamano";
import Tipo from "../components/Tipo/Tipo";
import { useState, useEffect } from "react";
import { BoolHook } from "../hooks/BoolHook.js";
import { useApi } from "../hooks/useApi";
import Footer from "../components/Footer/Footer";
 
function Calculadora() {
  const [valores, setValores] = useApi();               //hook que se conecta al backend para devolver los precios de cada cosa
  const [resultados, setResultados] = BoolHook(false); //hook que controla que se muestro u oculten los resultados
  const [elecciones, setElecciones] = useState(       //Hook encargado de actualizar las opciones elegidas
    {
      fondo: null,
      colores: null,
      prendas: null,
      estampado: null,
      pintura: null,
      opciones: [false, false],
      cotizacion: 1,
    }
  );

  useEffect(() => {
    setValores();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  


  return (
    <div className="App">
      <Header />

      <div className="container app-container">
        <div className="container options-container">
          <FondoPrenda
            resultados={resultados}
            setResultados={setResultados}
            setElecciones={setElecciones}
          />
          <Colores
            resultados={resultados}
            setResultados={setResultados}
            setElecciones={setElecciones}
          />
          <Tamano
            resultados={resultados}
            setResultados={setResultados}
            setElecciones={setElecciones}
          />
          <Tipo
            resultados={resultados}
            setResultados={setResultados}
            setElecciones={setElecciones}
          />
          <Cotizar
            resultados={resultados}
            setResultados={setResultados}
            elecciones={elecciones}
            valores={valores}
            setElecciones={setElecciones}
            setValores={setValores}
          />
        </div>

        <div className="container cotizacion-container" id="cotizacion">
          <Banner elecciones={elecciones} resultados={resultados} />
          <Cotizacion valores={valores} elecciones={elecciones} resultados={resultados} />
          <img className={`rotacion${resultados ? "1" : "0"}-logo rotacion-full`} src={logo} alt="logo de la compañia" />

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Calculadora;
