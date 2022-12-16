import "./Header.css"
import logo from "../../assets/LogoByUnoTextil.png"
 import { BoolHook } from "../../hooks/BoolHook.js"
import { Link } from "react-router-dom"
import Modal from "../Modal/Modal"


function Header() {

    const login = JSON.parse(window.localStorage.getItem("login")) || false; //controla si está logueado o no

    const [isOpenError, openModalError] = BoolHook(false); //Hook que maneja la muesta y la desaparicion del modal

    const logOut = ()=>{

        window.localStorage.setItem("login", JSON.stringify({user: "", idbase: "", logged: false}))
        openModalError()
    }

    return (
        <>
            <header>


                <nav className="navbar navbar-expand-md navbar-dark sombra-header" style={{ backgroundColor: "#e1a325" }}>
                    <div className="container-fluid container">
                        <Link to="/"><img className="header-logo" src={logo} alt="app logo" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto">
                                <Link className="nav-link inter"

                                
                                style={ {display: !login.logged &&  "none"}}
                                onClick={logOut} to="/">Log Out</Link>
                                <Link className="nav-link active inter" to="/configuracion">Configuración</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <Modal isOpen={isOpenError} closeModal={openModalError}>
                        <div className="card text-center" style={{ width: " 18rem", backgroundColor: "black" }} >
                            <div className="card-body ">
                                <h5 className="card-title">
                                    <div className="wrapper">
                                        <div className="wrapper-wrong">

                                        </div>
                                    </div>
                                </h5>
                                <h6 className="card-subtitle mb-3">Cerraste seción con éxito, te esperamos nuevamente</h6>

                                <div className="d-grid gap-2">
                                    <button className="btn" onClick={() => openModalError()} >Cerrar</button>
                                </div>

                            </div>
                        </div>
                    </Modal>

            </header>


        </>
    );
}

export default Header;