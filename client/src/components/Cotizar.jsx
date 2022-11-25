import "./Cotizar.css"
import { BoolHook } from "../hooks/BoolHook.js"

function Cotizar({resultados, setResultados}) {

    const [cotizacion, setCotizacion] = BoolHook(true)


    return (
        <>
            <div className="container container-cotizar">


                <div className="input-group mb-3">
                    <div className="input-group-text">
                        <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                    </div>
                    <input type="text" className="form-control non-clickable" aria-label="Text input with checkbox" value="¿Se usarán shablones usados?" readOnly />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-text">
                        <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" onChange={() => setCotizacion()} />
                    </div>
                    <input type="text" className="form-control non-clickable" aria-label="Text input with checkbox" value="¿Conversión de U$D a ARS?" readOnly />
                </div>




                



                    <div className="form-floating mb-3" style={{display: cotizacion && "none"}}>
                        <input type="number" className="form-control valor-dolar" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Ingresar la cotización del día</label>
                    </div>

                    <a className="boton-prueba d-grid gap-2" href="#cotizacion">
                    <button type="button" className="  btn-cotizar " href="#cotizacion" onClick={()=> !resultados && setResultados()}  >Cotizar</button>
                        
                    </a>
                    
                    





                    

                


            </div>
        </>
    );
}

export default Cotizar;