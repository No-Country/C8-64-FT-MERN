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
                <h5 className="titulo-100">Seleccionar el tamaño del estampado</h5>
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
                    <p className="descripcion">{logo.texto}</p>

                        </div>
                        
                        
                    </div>



                        )
                    })}




                    {/* 

                    <div className="icon-image"
                        style={{ border: eleccion === 1 && ("2px solid #e1a325") }}
                        onClick={() => click(1)}
                    ><img className="remera" src={logo} alt="fondo claro" />
                    <p className="descripcion">Logo</p>
                    </div>

                    <div className="icon-image"
                        style={{ border: eleccion === 2 && ("2px solid #e1a325") }}
                        onClick={() =>click(2)}
                    ><img className="remera" src={full} alt="fondo claro" />
                    <p className="descripcion">Full</p>
                    </div> */}


                </div>


            </div>
        </>
    );
}

export default Tamano;