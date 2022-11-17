import { useState } from "react";
import base from "../assets/base.jpg";
import "./Tipo.css"

function Tipo() {
    const [eleccion, SetEleccion] = useState("null")
    return (
        <>
            <div className="containter fondo-prenda">
                <h5>Seleccionar tipo de pintura</h5>
                <div className="containter opciones-containter">
                    <div
                        className="icon-image"
                        style={{ border: eleccion === "agua" && ("2px solid #e1a325") }}
                        onClick={() => SetEleccion("agua")}
                    ><img src={base} alt="remera base" />
                        <p className="descripcion">Pintura al agua</p></div>

                    <div className="icon-image"
                        style={{ border: eleccion === "plastisol" && ("2px solid #e1a325") }}
                        onClick={() => SetEleccion("plastisol")}
                    >
                        <img src={base} alt="remera base" />
                        <p className="descripcion">Plastisol</p>
                    </div>

                    <div className="icon-image"
                        style={{ border: eleccion === "Relieve" && ("2px solid #e1a325") }}
                        onClick={() => SetEleccion("Relieve")}
                    >
                        <img src={base} alt="remera base" />
                        <p className="descripcion">Relieve</p>
                    </div>

                    <div className="icon-image"
                        style={{ border: eleccion === "Foil" && ("2px solid #e1a325") }}
                        onClick={() => SetEleccion("Foil")}
                    >
                        <img src={base} alt="remera base" />
                        <p className="descripcion">Foil</p>
                    </div>

                    <div className="icon-image"
                        style={{ border: eleccion === "Glitter" && ("2px solid #e1a325") }}
                        onClick={() => SetEleccion("Glitter")}
                    >
                        <img src={base} alt="remera base" />
                        <p className="descripcion">Glitter</p>
                    </div>

                    <div className="icon-image"
                        style={{ border: eleccion === "Corrosión" && ("2px solid #e1a325") }}
                        onClick={() => SetEleccion("Corrosión")}
                    >
                        <img src={base} alt="remera base" />
                        <p className="descripcion">Corrosión</p>
                    </div>

                    <div className="icon-image"
                        style={{ border: eleccion === "d&p" && ("2px solid #e1a325") }}
                        onClick={() => SetEleccion("d&p")}
                    >
                        <img src={base} alt="remera base" />
                        <p className="descripcion">Dorado y Plateado</p>
                    </div>


                </div>


            </div>
        </>
    );
}

export default Tipo;