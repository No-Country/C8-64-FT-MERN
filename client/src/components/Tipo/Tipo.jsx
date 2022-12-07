import "./Tipo.css"
import { useState } from "react";
import { opcionesApp } from "../../utils/opcionesApp";



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
            <div className="containter pintura-prenda">
                <h5 className="inter">Seleccionar tipo de pintura</h5>
                <div className="containter opciones-containter">

                    {logosPintura.map(({logo, texto}, index) => {
                        return (

                            



                            <div
                            className={`icon-image ${eleccion === index && "rotacion"}`}
                                style={{ border: eleccion === index && ("2px solid #e1a325"), transform: eleccion === index && "rotateY(360deg)" }}
                                onClick={() => click(index)}
                                key={index}
                            >
                                <div className="logos-container">
                                <img src={logo} className="remera" alt="remera base" />
                                <p className="descripcion inter">{texto}</p></div>

                                </div>
                                
                        )
                    })}


                </div>


            </div>
        </>
    );
}

export default Tipo;