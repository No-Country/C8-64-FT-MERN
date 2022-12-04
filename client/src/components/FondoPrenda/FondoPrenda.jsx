import "./FondoPrenda.css";
import { useState } from "react";
import { opcionesApp } from "../../utils/opcionesApp";
 
function FondoPrenda({ resultados, setResultados, setElecciones }) {
    const [eleccion, SetEleccion] = useState("null");

    const {logosFondo} = opcionesApp();

    const click = (index) => {
        resultados &&
            eleccion !== index && setResultados();
        SetEleccion(index)

        setElecciones(eleccion =>({
            ...eleccion,
           fondo: index
        }))

    }

   /*  const actualizarEleccion = (opcion)=>{
        

    } */

    return (
        <>
            <div className="containter fondo-prenda">
                <h5 className="titulo-50">Seleccionar el fondo de la prenda</h5>
                <div className="containter opciones-containter">


                    {logosFondo.map((logo, index)=>{
                        return (
                            <div
                        className={`icon-image ${eleccion === index && "rotacion"}`}
                        key={index}
                        style={{ border: eleccion === index && ("2px solid #e1a325"), transform: eleccion === index && "rotateY(360deg)" }}
                        onClick={() => click(index)}

                    >
                        <div className="logos-container">
                        <img src={logo.icono} className="remera" alt="remera base" />
                    <p className="descripcion">{logo.texto}</p>

                        </div>
                        
                        
                        
                    </div>

                        )
                    })}

                    


                </div>


            </div>
        </>
    );
}

export default FondoPrenda;