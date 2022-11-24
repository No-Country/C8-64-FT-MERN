import { useState } from "react";
import base from "../assets/base.jpg";
import "./Tipo.css"

function Tipo({ resultados, setResultados }) {
    const [eleccion, SetEleccion] = useState("null");

    const tipos = ["Pintura al agua", "Plastisol", "Relieve", "Foil", "Glitter", "Corrosión", "Dorado y Plateado"]

    const click = (comp) => {

        resultados &&
            eleccion !== comp && setResultados();
        SetEleccion(comp)

    }



    return (
        <>
            <div className="containter fondo-prenda">
                <h5>Seleccionar tipo de pintura</h5>
                <div className="containter opciones-containter">

                    {tipos.map((tipo, index) => {
                        return (
                            <div
                                className="icon-image"
                                style={{ border: eleccion === tipo && ("2px solid #e1a325") }}
                                onClick={() => click(tipo)}
                                key={index}
                            ><img src={base} className="remera" alt="remera base" />
                                <p className="descripcion">{tipo}</p></div>
                        )
                    })}


                </div>


            </div>
        </>
    );
}

export default Tipo;