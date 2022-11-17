import './App.css';
import Colores from './components/Colores';
import Cotizar from './components/Cotizar';
import FondoPrenda from './components/FondoPrenda';
import Header from './components/Header';
import Tamano from './components/Tamano';
import Tipo from './components/Tipo';

function App() {

  const opciones = {
    fondo: "",
    colores: "",
    cantidad: "",
    tamano: "",
    tipo: ""
  }


  return (
    <div className="App">
      <Header />
      <div className='container app-container' >
      <FondoPrenda opciones={opciones}/>
      <Colores />
      <Tamano />
      <Tipo />
      <Cotizar />

      </div>
      
     
      
    </div>
  );
}

export default App;
