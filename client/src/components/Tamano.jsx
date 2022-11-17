import { useState } from "react";
import central from "../assets/central.jpg"
import logo from "../assets/logo.jpg"
import full from "../assets/full.jpg"

import "./FondoPrenda.css"

function Tamano() {
    const [eleccion, SetEleccion] = useState("null")
    return (
        <>
            <div className="containter fondo-prenda">
                <h5>Seleccionar el tamaño del estampado</h5>
                <div className="containter opciones-containter">
                    <div
                        className="icon-image"
                        style={{ border: eleccion === "central" && ("2px solid #e1a325") }}
                        onClick={() => SetEleccion("central")}
                    ><img src={central} alt="fondo claro" /></div>

                    <div className="icon-image"
                        style={{ border: eleccion === "logo" && ("2px solid #e1a325") }}
                        onClick={() => SetEleccion("logo")}
                    ><img src={logo} alt="fondo claro" /></div>

                    <div className="icon-image"
                        style={{ border: eleccion === "full" && ("2px solid #e1a325") }}
                        onClick={() => SetEleccion("full")}
                    ><img src={full} alt="fondo claro" /></div>


                </div>


            </div>
        </>
    );
}

export default Tamano;