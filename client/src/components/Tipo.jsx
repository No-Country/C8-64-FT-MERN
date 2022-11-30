import { useState } from "react";
import { opcionesApp } from "../utils/opcionesApp";



import "./Tipo.css"

function Tipo({ resultados, setResultados, setElecciones }) {
    const [eleccion, SetEleccion] = useState("null");

    const {logosPintura} = opcionesApp();


    const click = (comp) => {

        resultados &&
            eleccion !== comp && setResultados();
        SetEleccion(comp)
        setElecciones(eleccion =>({
            ...eleccion,
            pintura: comp
        }))

    }



    return (
        <>
            <div className="containter fondo-prenda">
                <h5>Seleccionar tipo de pintura</h5>
                <div className="containter opciones-containter">

                    {logosPintura.map(({logo, texto}, index) => {
                        return (
                            <div
                                className="icon-image"
                                style={{ border: eleccion === index && ("2px solid #e1a325") }}
                                onClick={() => click(index)}
                                key={index}
                            ><img src={logo} className="remera" alt="remera base" />
                                <p className="descripcion">{texto}</p></div>
                        )
                    })}


                </div>


            </div>
        </>
    );
}

export default Tipo;