import { useState } from "react";
import base from "../assets/base.jpg";
import imagen2 from "../assets/oscuro.jpg"
import "./FondoPrenda.css"

function FondoPrenda({ resultados, setResultados }) {
    const [eleccion, SetEleccion] = useState("null");

    const click = (comp) => {
        resultados &&
            eleccion !== comp && setResultados();
        SetEleccion(comp)

    }

    return (
        <>
            <div className="containter fondo-prenda">
                <h5>Seleccionar el fondo de la prenda</h5>
                <div className="containter opciones-containter">
                    <div
                        className="icon-image"
                        style={{ border: eleccion === "claro" && ("2px solid #e1a325") }}
                        onClick={() => click("claro")}
                    ><img src={base} className="remera" alt="remera base" />
                    <p className="descripcion">Fondo Claro</p>
                    </div>

                    <div className="icon-image"
                        style={{ border: eleccion === "oscuro" && ("2px solid #e1a325") }}
                        onClick={() => click("oscuro")}
                    ><img src={imagen2} className="remera" alt="fondo oscuro" />
                    <p className="descripcion">Fondo Oscuro</p>
                    </div>
                </div>


            </div>
        </>
    );
}

export default FondoPrenda;