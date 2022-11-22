import { useState } from "react";
import central from "../assets/central.jpg"
import logo from "../assets/logo.jpg"
import full from "../assets/full.jpg"

import "./FondoPrenda.css"

function Tamano({resultados, setResultados}) {
    const [eleccion, SetEleccion] = useState("null");

    const click = (comp)=>{
            resultados &&
                eleccion !== comp && setResultados(); 
            SetEleccion(comp)
    }

    return (
        <>
            <div className="containter fondo-prenda">
                <h5>Seleccionar el tamaño del estampado</h5>
                <div className="containter opciones-containter">
                    <div
                        className="icon-image"
                        style={{ border: eleccion === "central" && ("2px solid #e1a325") }}
                        onClick={() => click("central")}
                    ><img className="remera" src={central} alt="fondo claro" />
                    <p className="descripcion">Central</p>
                    </div>

                    <div className="icon-image"
                        style={{ border: eleccion === "logo" && ("2px solid #e1a325") }}
                        onClick={() => click("logo")}
                    ><img className="remera" src={logo} alt="fondo claro" />
                    <p className="descripcion">Logo</p>
                    </div>

                    <div className="icon-image"
                        style={{ border: eleccion === "full" && ("2px solid #e1a325") }}
                        onClick={() =>click("full")}
                    ><img className="remera" src={full} alt="fondo claro" />
                    <p className="descripcion">Full</p>
                    </div>


                </div>


            </div>
        </>
    );
}

export default Tamano;