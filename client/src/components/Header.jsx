import "./Header.css"
import logo from "../assets/Logo Fondo Oscuro.png"
import { BoolHook } from "../hooks/BoolHook.js"
import { useState } from "react"
import { opcionesApp } from "../utils/opcionesApp"

function Header() {

    const [pais, setPais] = BoolHook(true);
    const { paises } = opcionesApp();
    const [activa, setActiva] = useState(0)

    return (
        <>
            <header>

                <img className="header-logo" src={logo} alt="" />
                <img className="flag" src={paises[activa].bandera} alt={paises[activa].texto}
                    onClick={() => setPais()} />
            </header>
            <div className="container container-paises" style={{ opacity: pais && "0", pointerEvents: pais && "none" }}>

                {paises.map(({bandera, texto}, index) => {
                    return (
                        <div className="flag-container" key={index}>
                            <img className="flag" src={bandera}
                            alt={texto}
                                onClick={() => {
                                    setActiva(index);
                                    setPais();
                                }} />
                        </div>
                    )

                })}



            </div>
        </>
    );
}

export default Header;