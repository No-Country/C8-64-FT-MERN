import "./Banner.css";
import claro from "../../assets/logos pequenos/claro pequeño.jpg"
import oscuro from "../../assets/logos pequenos/oscuro pequeño.jpg"

import vacio from "../../assets/logos pequenos/vacio.png";

import central from "../../assets/logos pequenos/central pequeño.jpg"
import logo from "../../assets/logos pequenos/logo pequeño.jpg"
import full from "../../assets/logos pequenos/full pequeño.jpg"

import agua from "../../assets/logos pequenos/PAG.png";
import plastisol from "../../assets/logos pequenos/Plastisol.png";
import relieve from "../../assets/logos pequenos/relieve.png";
import foil from "../../assets/logos pequenos/foil.png";
import glitter from "../../assets/logos pequenos/glittr.png";
import corrocion from "../../assets/logos pequenos/corrosion.png";
import dyp from "../../assets/logos pequenos/d&p.png";

import marca from "../../assets/Logo Fondo Claro.png"

function Banner({ elecciones, resultados }) {

    const opciones = {
        fondo: [claro, oscuro],
        estampado: [logo, central, full],
        pintura: [agua, plastisol, relieve, foil, glitter, corrocion, dyp]
    }

    return (
        <>
            <div className={`containter banner-container muestra${resultados ? "1" : "0 no-display"}`}>
                <img className="banner-logo" src={marca} alt="logo de la compañia" />

                <div className="container elecciones-container">
                    <div className="logo-eleccion ">
                        <img className="eleccion" src={opciones.fondo[elecciones.fondo]} alt="" />

                    </div>
                    <div className="logo-eleccion ">

                        <img className="eleccion" src={vacio} alt="" />
                        <p className="numero inter">{elecciones.colores}</p>

                    </div>
                    <div className="logo-eleccion ">
                        <img className="eleccion" src={vacio} alt="" />
                        <p className="numero inter">{elecciones.prendas}</p>

                    </div>
                    <div className="logo-eleccion ">
                        <img className="eleccion" src={opciones.estampado[elecciones.estampado]} alt="" />

                    </div>
                    <div className="logo-eleccion ">
                        <img className="eleccion" src={opciones.pintura[elecciones.pintura]} alt="" />

                    </div>






                </div>

            </div>
        </>
    );
}

export default Banner;