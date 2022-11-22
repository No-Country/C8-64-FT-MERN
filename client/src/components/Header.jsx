import "./Header.css"
import argentina from '../assets/flags/argentina.png'
import bolivia from "../assets/flags/bolivia.png"
import brazil from "../assets/flags/brazil.png"
import chile from "../assets/flags/chile.png"
import paraguay from "../assets/flags/paraguay.png"
import spain from "../assets/flags/spain.png"
import unitedS from "../assets/flags/united-states.png"
import uruguay from "../assets/flags/uruguay.png"
import logo from "../assets/Logo Fondo Oscuro.png"
import { BoolHook } from "../hooks/BoolHook.js"
import { useState } from "react"

function Header() {

    const [pais, setPais] = BoolHook(true);
    const [activa, setActiva] = useState(argentina)

    return (
        <>
            <header>
                
            <img className="header-logo" src={logo} alt="" />
                <img className="flag" src={activa} alt="" 
                onClick={()=>setPais()} />
            </header>
            <div className="container container-paises" style={{opacity: pais && "0", pointerEvents: pais && "none"}}>
                <div className="flag-container">
                    <img className="flag" src={argentina} alt="" 
                    onClick={() => {
                        setActiva(argentina);
                        setPais();
                    }} />
                </div>
                <div className="flag-container">
                    <img className="flag" src={bolivia} alt="" 
                    onClick={() => {
                        setActiva(bolivia);
                        setPais();
                        }} /></div>
                <div className="flag-container">
                    <img className="flag" src={brazil} alt="" 
                    onClick={() => {
                        setActiva(brazil)
                        setPais()
                        }} />
                </div>
                <div className="flag-container">
                    <img className="flag" src={chile} alt="" 
                    onClick={() => {
                        setActiva(chile)
                        setPais()
                        }} />
                </div>
                <div className="flag-container">
                    <img className="flag" src={paraguay} alt="" 
                    onClick={() => {
                        setActiva(paraguay)
                        setPais()
                        }} />
                </div>
                <div className="flag-container">
                    <img className="flag" src={spain} alt="" 
                    onClick={() => {
                        setActiva(spain)
                        setPais()}} />
                </div>
                <div className="flag-container">
                    <img className="flag" src={unitedS} alt="" 
                    onClick={() => {
                        setActiva(unitedS)
                        setPais()
                        }} />
                </div>
                <div className="flag-container">
                    <img className="flag" src={uruguay} alt="" 
                    onClick={() => {
                        setActiva(uruguay)
                        setPais()
                        }} />
                </div>
            </div>
        </>
    );
}

export default Header;