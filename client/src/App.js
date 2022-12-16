import "./App.css";
import Calculadora from "./components/Calculadora";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Configuracion from "./components/Configuracion";
import Team from "./components/Team/Team";

function App() {



  return (
    <>


    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calculadora />} />
          <Route path="/login" element={<Login />} />
          <Route path="/configuracion" element={<Configuracion />} />
          <Route path="/team" element={<Team />} /> 
        </Routes>
      </BrowserRouter>
    </>
   
  );
}

export default App;
