import "./App.css";
import Calculadora from "./components/Calculadora";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {



  return (
    <>


    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calculadora />} />
          <Route path="/login" element={<Login />} />

          
        </Routes>
      </BrowserRouter>





    
    </>
   
  );
}

export default App;
