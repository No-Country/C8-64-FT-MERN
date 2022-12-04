import "./App.css";
import Calculadora from "./components/Calculadora";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {



  return (
    <>


    <Router>
        <Routes>
          <Route path="/" element={<Calculadora />} />

          
        </Routes>
      </Router>





    
    </>
   
  );
}

export default App;
