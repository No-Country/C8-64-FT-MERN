import "./Cotizar.css"
import { BoolHook } from "../../hooks/BoolHook.js"
import Modal from "../Modal/Modal";
import { useState } from "react";
import { opcionesApp } from "../../utils/opcionesApp";



function Cotizar({ resultados, setResultados, elecciones, setElecciones, valores, setValores }) {

    const valorDolar = document.querySelector(".valor-dolar");


    const [isOpenError, openModalError] = BoolHook(false); //inicializacion de la variable que maneja que se muestre o se oculte el Modal que muestra los mensajes de error
    const [mensaje, setMensaje] = useState(""); //Hook que controla los mensajes de error
    const { opcionesCotizar } = opcionesApp(); //trae las opciones de checkbox del archivo de configuracion


    const handleOptions = (event) => {   //Funcion que maneja las opciones de las checkbox shablones y cotizacion

        resultados && setResultados();


        const opcion = event.target.name;

        if (opcion === "cotizacion" && elecciones.opciones[1]) {
            valorDolar.value = ""

            setElecciones(eleccion => ({
                ...eleccion,
                cotizacion: 1
            }))

        }



        if (opcion === "shablones") {
            setElecciones(eleccion => ({
                ...eleccion,
                opciones: [!(eleccion.opciones[0]), (eleccion.opciones[1])]
            }))
        } else {
            setElecciones(eleccion => ({
                ...eleccion,
                opciones: [(eleccion.opciones[0]), !(eleccion.opciones[1])]
            }))
        }



    }

    const handleInput = (event) => {  //funcion que modifica el valor de la cotización cuando se ingresa el monto en el input

        resultados && setResultados();
        const valor = Number(event.target.value)

        setElecciones(eleccion => ({
            ...eleccion,
            cotizacion: valor
        }))
    }

    const handleClick = () => { //funcion que realiza controla que se hayan seleccionado todas las opciones obligatorias y muesta el resultado


        for (const eleccion in elecciones) {
            if (elecciones[eleccion] == null && (eleccion !== "colores") && (eleccion !== "prendas")) {
                openModalError();
                return (
                    setMensaje(`Tienes que elegir el tipo de ${eleccion} `)
                )
            }
            if ((elecciones[eleccion] == null || elecciones[eleccion] < 1) && (eleccion === "colores" || eleccion === "prendas")) {
                openModalError();
                return (
                    eleccion === "colores" ?
                        setMensaje(`Tienes que seleccionar la cantidad de colores a utilizar`) :
                        setMensaje(`Tienes que seleccionar la cantidad de prendas`)
                )
            }
        }

        if (elecciones.fondo === 0 && elecciones.pintura === 5) {
            openModalError();
            return (
                setMensaje(`No se puede utilizar corrosión en un fondo claro`)
            )
        }

        if (elecciones.opciones[1] && elecciones.cotizacion < 1) {
            openModalError();
            return (
                setMensaje(`El valor de la cotización debe de ser no puede ser inferior a 1`)
            )
        }


        valores.static && setValores()



        !resultados && setResultados();
    }

    return (
        <>
            <div className="container container-cotizar">

                {opcionesCotizar.map(({ name, texto }, index) => {
                    return (
                        <div className="input-group mb-3 checkbox-container" key={index}>
                            <div className="input-group-text">
                                <input className="form-check-input mt-0"
                                    type="checkbox"
                                    value=""
                                    aria-label="Checkbox for following text input"
                                    checked={elecciones.opciones[index]}
                                    onChange={handleOptions}
                                    name={name} />
                            </div>
                            <input type="text" className="form-control non-clickable inter" aria-label="Text input with checkbox" value={texto} readOnly />
                        </div>)
                })}




                <div className="form-floating mb-3" style={{ display: !elecciones.opciones[1] && "none" }}>
                    <input type="number" className="form-control valor-dolar" id="floatingInput" placeholder="0" onChange={handleInput} />
                    <label className="cotizacion-label inter" htmlFor="floatingInput">Ingresar la cotización del día</label>
                </div>

                <a className="boton-prueba d-grid gap-2" href="#cotizacion">
                    <button type="button" className="btn-cotizar inter" href="#cotizacion" onClick={handleClick}>Cotizar</button>
                </a>

                <Modal isOpen={isOpenError} closeModal={openModalError}>
                        <div className="card text-center" style={{ width: " 18rem", backgroundColor: "black" }} >
                            <div className="card-body ">
                                <h5 className="card-title">
                                    <div className="wrapper">
                                        <div className="wrapper-wrong">

                                        </div>
                                    </div>
                                </h5>
                                <h6 className="card-subtitle mb-3">{mensaje}</h6>

                                <div className="d-grid gap-2">
                                    <button className="btn" onClick={() => openModalError()} >Cerrar</button>
                                </div>

                            </div>
                        </div>
                    </Modal>


            </div>
        </>
    );
}

export default Cotizar;