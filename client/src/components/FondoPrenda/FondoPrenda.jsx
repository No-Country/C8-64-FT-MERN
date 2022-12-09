import "./FondoPrenda.css";
import { useState } from "react";
import { opcionesApp } from "../../utils/opcionesApp";
 
function FondoPrenda({ resultados, setResultados, setElecciones }) {
    const [eleccion, SetEleccion] = useState("null"); //hook para que controle cual es la opcion elegida

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


    return (
        <>
            <div className="containter fondo-prenda">
                <h5 className="titulo-50 inter">Seleccionar el fondo de la prenda</h5>
                <div className="containter opciones-containter">


                    {logosFondo.map((logo, index)=>{
                        return (
                            <div
                        className={`icon-image ${eleccion === index && "rotacion"}`}
                        key={index}
                        
                        style={{ backgroundColor: eleccion === index && ("#b6b1b2") , border: eleccion === index && "2px solid black", transform: eleccion === index && "rotateY(360deg)" }}
                        onClick={() => click(index)}

                    >
                        <div className="logos-container">
                        <img src={logo.icono} className="remera" alt="remera base" />
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