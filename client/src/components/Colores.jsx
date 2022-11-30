import lapiz from "../assets/lapiz.jpg";
import { BoolHook } from "../hooks/BoolHook.js"
import "./Colores.css"


function Colores({ resultados, setResultados, setElecciones }) {

    const [colores, setColores] = BoolHook(false);
    const [prendas, setPrendas] = BoolHook(false);


    function handleChange(event) {
        const { name, value } = event.target;
        setElecciones(eleccion =>({
            ...eleccion,
            [name]: value
        }))

        resultados && setResultados()
    
        /* setNote(prevNote => {
          return {
            ...prevNote,
            [name]: value
          };
        }); */
      }

    /* const actualizarEleccion = (opcion)=>{
        setElecciones(eleccion =>({
            ...eleccion,
            ...opcion
        }))

    } */


    return (
        <>
            <div className="containter fondo-prenda">
                <h5>Cantidad de Colores y prendas a Estampar</h5>
                <div className="containter opciones-containter">

                    <div className="icon-image">

                        <div style={{ display: colores && "none" }}
                            onClick={() => setColores()}>
                            <img className="lapiz" src={lapiz} alt="colores" />
                            <p className="descripcion">Colores</p>

                        </div>


                        <div className=" mb-3 ml-2"
                            style={{ display: !colores && "none" }}>
                            <input type="number"
                            name="colores"
                                onChange={handleChange}
                                className="form-control input-numbers" id="exampleFormControlInput1" placeholder="0" />
                            <label htmlFor="exampleFormControlInput1" className="form-label">Colores</label>
                        </div>
                    </div>


                    <div className="icon-image">

                        <div style={{ display: prendas && "none" }}
                            onClick={() => setPrendas()}>
                            <img className="lapiz" src={lapiz} alt="prendas"
                                style={{ display: prendas && "none" }}
                                

                            />
                            <p className="descripcion">Prendas</p>

                        </div>





                        <div className=" mb-3"
                            style={{ display: !prendas && "none" }}>
                            <input type="number"
                            name="prendas"
                                onChange={handleChange}
                                className="form-control input-numbers" id="exampleFormControlInput2" placeholder="0" />
                            <label htmlFor="exampleFormControlInput2" className="form-label">Prendas</label>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
}

export default Colores;