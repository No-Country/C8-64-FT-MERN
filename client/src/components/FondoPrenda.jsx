import { useState } from "react";
import claro from "../assets/claro.jpg"
import imagen2 from "../assets/oscuro.jpg"
import "./FondoPrenda.css"

function FondoPrenda() {
    const [eleccion, SetEleccion] = useState("null")
  
    return ( 
        <>
        <div className="containter fondo-prenda">
            <h5>Seleccionar el fondo de la prenda</h5>
            <div className="containter opciones-containter">
                <div 
                className="icon-image"
                style={{ border: eleccion === "claro" && ("2px solid #e1a325") }}
                onClick={()=>SetEleccion("claro")}
                ><img src={claro} alt="fondo claro"  /></div>

                <div className="icon-image"
                style={{ border: eleccion === "oscuro" && ("2px solid #e1a325") }}
                onClick={()=>SetEleccion("oscuro")}
                ><img src={imagen2} alt="fondo oscuro"  /></div>
            </div>
            

        </div>
        </>
     );
}

export default FondoPrenda;