import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Configuracion.css"
import { useApi } from "../hooks/useApi";
import { useEffect } from "react";
import { BoolHook } from "../hooks/BoolHook";
import Modal from "./Modal/Modal";
import latigo from "../assets/latigo.gif"

function Configuracion() {

    useEffect(() => {
        dataBase === null
            && leerBD()

    })

    const [isOpenAlert, openModalAlert] = BoolHook(false);
    const [isOpenSuccess, openModalSuccess] = BoolHook(false);

    const [, , , leerBD, postDB, dataBase, setDataBase] = useApi()
    const handleUpdate = () => {
        openModalAlert()
    }
    /* console.log(dataBase); */

    const actualizacion = (event) => {
        const name = (event.target.name);
        const value = (event.target.value)

        setDataBase((current) => {
            const { id, ...rest } = current;

            return {
                ...rest,
                [name]: Number(value)
            }
        })
    }

    const actualizarDB = ()=>{
        postDB(dataBase);
        openModalAlert();
        openModalSuccess();


    }

    const login = JSON.parse(window.localStorage.getItem("login")) || false;
    if (login.logged) {

        if (dataBase !== null ) {
            return (
                <div className="App" >
                    <Header />
                    <div className="configuracion-container" >

                        <div className="container py-5  "  >

                            <form action="" >
                                <div className="row" >
                                    <div className="col-12" >
                                        <div className=""  >
                                            <div className="row d-flex justify-content-center " > {/* acá esta */}


                                                <div className="col-12 col-lg-6 d-flex  flex-column pt-2 ps-5 pe-5 mb-5" >


                                                    <h3 className="text-center mb-3">Valores de Matricería y Rendimiento:</h3>

                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputBorrado" className="col-sm-9 col-md-9 col-lg-9 col-form-label text-left tamano-letra inter">Borrado:</label>
                                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="shablon_borrado" onChange={actualizacion} value={dataBase.shablon_borrado} id="inputBorrado" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputNuevo" className="col-sm-9 col-md-9 col-lg-9 col-form-label tamano-letra inter">Shablon Nuevo:</label>
                                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="shablon_nuevo" onChange={actualizacion} value={dataBase.shablon_nuevo} id="inputNuevo" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputUsado" className="col-sm-9 col-md-9 col-lg-9 col-form-label tamano-letra inter">Shablon Usado:</label>
                                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="shablon_usado" onChange={actualizacion} value={dataBase.shablon_usado} id="inputUsado" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputNuevo" className="col-sm-9 col-md-9 col-lg9 col-form-label tamano-letra inter">Bajada de Película:</label>
                                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="shablon_bajada" onChange={actualizacion} value={dataBase.shablon_bajada} id="inputBajada" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputLogoC" className="col-sm-9 col-md-9 col-lg-9 col-form-label tamano-letra inter">Rendimiento Logo Fondo Claro:</label>
                                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="logo_claro" onChange={actualizacion} value={dataBase.logo_claro} id="inputLogoC" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputCentralC" className="col-sm-9 col-md-9 col-lg-9 col-form-label tamano-letra inter">Rendimiento Central Fondo Claro:</label>
                                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="central_claro" onChange={actualizacion} value={dataBase.central_claro} id="inputCentralC" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputFullC" className="col-sm-9 col-md-9 col-lg-9 col-form-label tamano-letra inter">Rendimiento Full Fondo Claro:</label>
                                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="full_claro" onChange={actualizacion} value={dataBase.full_claro} id="inputFullC" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputLogoO" className="col-sm-9 col-md-9 col-lg-9 col-form-label tamano-letra inter">Rendimiento Logo Fondo Oscuro:</label>
                                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="logo_oscuro" onChange={actualizacion} value={dataBase.logo_oscuro} id="inputLogoO" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputCentralO" className="col-sm-9 col-md-9 col-lg-9 col-form-label tamano-letra inter">Rendimiento Central Fondo Oscuro:</label>
                                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="central_oscuro" onChange={actualizacion} value={dataBase.central_oscuro} id="inputCentralO" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputFullO" className="col-sm-9 col-md-9 col-lg-9 col-form-label tamano-letra inter">Rendimiento Full Fondo Oscuro:</label>
                                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="full_oscuro" onChange={actualizacion} value={dataBase.full_oscuro} id="inputFullO" />
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className="col-12 col-lg-6 d-flex flex-column pt-2 ps-5 pe-5  mb-5" >


                                                    <h3 className="text-center mb-3">Precio por kg. por Tipo de Pintura:</h3>

                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputAguaFC" className="col-sm-9 col-md-9 col-lg-9 col-form-label tamano-letra inter">Pintura al agua (FC):</label>
                                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="agua_fc" onChange={actualizacion} value={dataBase.agua_fc} id="inputAguaFC" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputAguaFO" className="col-sm-9 col-md-9 col-lg-9 col-form-label tamano-letra inter">Pintura al agua (FO):</label>
                                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="agua_fo" onChange={actualizacion} value={dataBase.agua_fo} id="inputAguaFO" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputPlastisol" className="col-sm-9 col-md-9 col-lg-9 col-form-label tamano-letra inter">Plastisol:</label>
                                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="plastisol" onChange={actualizacion} value={dataBase.plastisol} id="inputPlastisol" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputRelieve" className="col-sm-9 col-md-9 col-lg-9 col-form-label tamano-letra inter">Relieve:</label>
                                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="relieve" onChange={actualizacion} value={dataBase.relieve} id="inputRelieve" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputFoil" className="col-sm-9 col-md-9 col-lg-9 col-form-label tamano-letra inter">Foil:</label>
                                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="foil" onChange={actualizacion} value={dataBase.foil} id="inputFoil" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputGlitter" className="col-sm-9 col-md-9 col-lg-9 col-form-label tamano-letra inter">Glitter:</label>
                                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="glitter" onChange={actualizacion} value={dataBase.glitter} id="inputGlitter" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputCorrosion" className="col-sm-9 col-md-9 col-lg-9 col-form-label tamano-letra inter">Corrosión:</label>
                                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="corrosion" onChange={actualizacion} value={dataBase.corrosion} id="inputCorrosion" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputDyP" className="col-sm-9 col-md-9 col-lg-9 col-form-label tamano-letra inter">Dorado y Plateado:</label>
                                                        <div className="col-sm-3 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="dyp" onChange={actualizacion} value={dataBase.dyp} id="inputDyP" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3" >
                                                    <div className="boton-prueba d-grid" >
                                                        <button type="button" className="btn btn-primary  inter" onClick={handleUpdate} style={{ backgroundColor: "#e1a325", borderColor: "#e1a325" }}>Actualizar Valores</button>
                                                        {/* <button className="btn btn-dark btn-lg btn-block form-control" type="submit" style={{ backgroundColor: "#e1a325", borderColor: "#e1a325" }}>Login</button> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>

                    </div>
                    <Modal isOpen={isOpenAlert} closeModal={openModalAlert}>
                        <div className="card text-center" style={{ width: " 18rem", backgroundColor: "black" }} >
                            <div className="card-body ">
                                <h4 className="card-subtitle mb-3">CUIDADO!!!</h4>
                                <h6 className="card-text text-light mb-4">Está a punto de actualizar los costos en la base de datos. Esto no se puede deshacer.</h6>

                                <div className="d-flex justify-content-center gap-2">

                                    <div className="d-grid col-6 mx-auto">
                                        <button type="button" className="btn btn-outline-success" onClick={actualizarDB} >Continuar</button>

                                    </div>

                                    <div className="d-grid col-6 mx-auto">
                                        <button type="button" className="btn btn-outline-danger" onClick={() => openModalAlert()}>Cancelar</button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </Modal>

                    <Modal isOpen={isOpenSuccess} closeModal={openModalSuccess}>
                        <div className="card text-center" style={{ width: " 18rem", backgroundColor: "black" }} >
                            <div className="card-body ">
                                <h5 className="card-title">
                                    <div className="wrapper">
                                        <div className="wrapper-wrong">

                                        </div>
                                    </div>
                                </h5>
                                <h6 className="card-subtitle mb-3">Base de datos actualizada con éxito</h6>

                                <div className="d-grid gap-2">
                                    <button className="btn" onClick={() => openModalSuccess()} >Cerrar</button>
                                </div>

                            </div>
                        </div>
                    </Modal>
                    <Footer />

                </div>
            );
        }else{
            return(
                <div className="App" >
                    <div className="message-container container mt-auto mb-auto">
                    <img src={latigo} alt="" />
                    <p className="inter" >Aguarde un momento mientras despertamos al Back-End.</p>

                    </div>
                
                </div>
            )
        }






    } else {
        window.location.replace("/login");
    }

}

export default Configuracion;