import "./Tamano.css"
import { useState } from "react";
import { opcionesApp } from "../../utils/opcionesApp";

function Tamano({resultados, setResultados, setElecciones}) {
    const [eleccion, SetEleccion] = useState("null");

    const {logosEstampado} = opcionesApp();


    const click = (comp)=>{

            resultados &&
                eleccion !== comp && setResultados(); 
            SetEleccion(comp)
            setElecciones(eleccion =>({
                ...eleccion,
                estampado: comp
            }))
    }

    return (
        <>
            <div className="containter tamano-prenda">
                <h5 className="titulo-100 inter">Seleccionar el tamaño del estampado</h5>
                <div className="containter opciones-containter">

                    

                    {logosEstampado.map((logo, index)=>{
                        return(
                            <div 
                            className={`icon-image ${eleccion === index && "rotacion"}`}
                        key={index}
                        style={{ border: eleccion === index && ("2px solid #e1a325"), transform: eleccion === index && "rotateY(360deg)" }}
                        onClick={() => click(index)}
                    >
                        <div className="logos-container">
                        <img className="remera" src={logo.icono} alt="fondo claro" />
                    <p className="descripcion inter">{logo.texto}</p>

                        </div>
                        
                        
                    </div>



                        )
                    })}


                </div>


            </div>
        </>
    );
}

export default Tamano;