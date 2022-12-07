import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Configuracion.css"
import { useApi } from "../hooks/useApi";
import { useEffect, useState } from "react";

function Configuracion() {

    useEffect(() => {
        dataBase === null
        && leerBD()
     
    })

    const [, , , leerBD, postDB, dataBase, setDataBase] = useApi()
    /* console.log(dataBase); */

    const actualizacion = (event)=>{
        const name = (event.target.name);
        const value = (event.target.value)
        
    

        setDataBase((current)=>{
            const {id, ...rest} = current;

            return{
              ...rest,
              [name]: Number(value)
            }
          })


    }

    const login = JSON.parse(window.localStorage.getItem("login")) || false;
    if (login.logged) {

        if(dataBase !==null){
            return (
                <div className="App">
                    <Header />
                    <div className="configuracion-container">
    
                        <div className="container py-5  " >
    
                            <form action="">
                                <div className="row">
                                    <div className="col-12">
                                        <div className=""  >
                                            <div className="row g-5 d-flex justify-content-center " >
    
    
                                                <div className="col-12 col-lg-6 d-flex justify-content-around  flex-column pt-2 ps-5 pe-5" >
    
    
                                                    <h3 className="text-center mb-3">Valores de Matricería y Rendimiento:</h3>
    
                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputBorrado"  className="col-sm-10 col-md-9 col-lg-9 col-form-label text-left inter">Borrado:</label>
                                                        <div className="col-sm-2 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="shablon_borrado" onChange={actualizacion} value={dataBase.shablon_borrado} id="inputBorrado" />
                                                        </div>
                                                    </div>
    
                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputNuevo" className="col-sm-10 col-md-9 col-lg-9 col-form-label inter">Shablon Nuevo:</label>
                                                        <div className="col-sm-2 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="shablon_nuevo" onChange={actualizacion} value={dataBase.shablon_nuevo} id="inputNuevo" />
                                                        </div>
                                                    </div>
    
                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputUsado" className="col-sm-10 col-md-9 col-lg-9 col-form-label inter">Shablon Usado:</label>
                                                        <div className="col-sm-2 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="shablon_usado" onChange={actualizacion} value={dataBase.shablon_usado} id="inputUsado" />
                                                        </div>
                                                    </div>
    
                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputNuevo" className="col-sm-10 col-md-9 col-lg9 col-form-label inter">Bajada de Película:</label>
                                                        <div className="col-sm-2 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="shablon_bajada" onChange={actualizacion} value={dataBase.shablon_bajada} id="inputBajada" />
                                                        </div>
                                                    </div>
    
                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputLogoC" className="col-sm-10 col-md-9 col-lg-9 col-form-label inter">Rendimiento Logo Fondo Claro:</label>
                                                        <div className="col-sm-2 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="logo_claro" onChange={actualizacion} value={dataBase.logo_claro} id="inputLogoC" />
                                                        </div>
                                                    </div>
    
                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputCentralC" className="col-sm-10 col-md-9 col-lg-9 col-form-label inter">Rendimiento Central Fondo Claro:</label>
                                                        <div className="col-sm-2 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="central_claro" onChange={actualizacion} value={dataBase.central_claro} id="inputCentralC" />
                                                        </div>
                                                    </div>
    
                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputFullC" className="col-sm-10 col-md-9 col-lg-9 col-form-label inter">Rendimiento Full Fondo Claro:</label>
                                                        <div className="col-sm-2 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="full_claro" onChange={actualizacion} value={dataBase.full_claro} id="inputFullC" />
                                                        </div>
                                                    </div>
    
                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputLogoO" className="col-sm-10 col-md-9 col-lg-9 col-form-label inter">Rendimiento Logo Fondo Oscuro:</label>
                                                        <div className="col-sm-2 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="logo_oscuro" onChange={actualizacion} value={dataBase.logo_oscuro} id="inputLogoO" />
                                                        </div>
                                                    </div>
    
                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputCentralO" className="col-sm-10 col-md-9 col-lg-9 col-form-label inter">Rendimiento Central Fondo Oscuro:</label>
                                                        <div className="col-sm-2 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="central_oscuro" onChange={actualizacion} value={dataBase.central_oscuro} id="inputCentralO" />
                                                        </div>
                                                    </div>
    
                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputFullO" className="col-sm-10 col-md-9 col-lg-9 col-form-label inter">Rendimiento Full Fondo Oscuro:</label>
                                                        <div className="col-sm-2 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="full_oscuro" onChange={actualizacion} value={dataBase.full_oscuro} id="inputFullO" />
                                                        </div>
                                                    </div>
    
                                                </div>
    
                                                <div className="col-12 col-lg-6 d-flex flex-column pt-2 ps-5 pe-5" >
    
    
                                                    <h3 className="text-center mb-3">Precio por kg. por Tipo de Pintura:</h3>
    
                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputAguaFC" className="col-sm-10 col-md-9 col-lg-9 col-form-label inter">Pintura al agua (FC):</label>
                                                        <div className="col-sm-2 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="agua_fc" onChange={actualizacion} value={dataBase.agua_fc} id="inputAguaFC" />
                                                        </div>
                                                    </div>
    
                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputAguaFO" className="col-sm-10 col-md-9 col-lg-9 col-form-label inter">Pintura al agua (FO):</label>
                                                        <div className="col-sm-2 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="agua_fo" onChange={actualizacion} value={dataBase.agua_fo} id="inputAguaFO" />
                                                        </div>
                                                    </div>
    
                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputPlastisol" className="col-sm-10 col-md-9 col-lg-9 col-form-label inter">Plastisol:</label>
                                                        <div className="col-sm-2 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="plastisol" onChange={actualizacion} value={dataBase.plastisol} id="inputPlastisol" />
                                                        </div>
                                                    </div>
    
                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputRelieve" className="col-sm-10 col-md-9 col-lg-9 col-form-label inter">Relieve:</label>
                                                        <div className="col-sm-2 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="relieve" onChange={actualizacion} value={dataBase.relieve} id="inputRelieve" />
                                                        </div>
                                                    </div>
    
                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputFoil" className="col-sm-10 col-md-9 col-lg-9 col-form-label inter">Foil:</label>
                                                        <div className="col-sm-2 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="foil" onChange={actualizacion} value={dataBase.foil} id="inputFoil" />
                                                        </div>
                                                    </div>
    
                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputGlitter" className="col-sm-10 col-md-9 col-lg-9 col-form-label inter">Glitter:</label>
                                                        <div className="col-sm-2 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="glitter" onChange={actualizacion} value={dataBase.glitter} id="inputGlitter" />
                                                        </div>
                                                    </div>
    
                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputCorrosion" className="col-sm-10 col-md-9 col-lg-9 col-form-label inter">Corrosión:</label>
                                                        <div className="col-sm-2 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="corrosion" onChange={actualizacion} value={dataBase.corrosion} id="inputCorrosion" />
                                                        </div>
                                                    </div>
    
                                                    <div className="form-group row mb-1">
                                                        <label htmlFor="inputDyP" className="col-sm-10 col-md-9 col-lg-9 col-form-label inter">Dorado y Plateado:</label>
                                                        <div className="col-sm-2 col-md-3 col-lg-3">
                                                            <input type="number" className="form-control text-center inter" name="dyp" onChange={actualizacion} value={dataBase.dyp} id="inputDyP" />
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3">
                                                    <div className="boton-prueba d-grid gap-2" >
                                                        <button type="button" className="btn btn-primary  inter" onClick={()=> postDB(dataBase)} style={{ backgroundColor: "#e1a325", borderColor: "#e1a325" }}>Actualizar Valores</button>
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
                    <Footer />
    
                </div>
            );
        }
        
   

        
        

    } else {
        window.location.replace("/login");
    }

}

export default Configuracion;