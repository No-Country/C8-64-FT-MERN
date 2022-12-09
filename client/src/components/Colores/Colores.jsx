import "./Colores.css"
import lapiz from "../../assets/logos grandes/colores.png";
import lapiz2 from "../../assets/logos grandes/prendas.png";
import { BoolHook } from "../../hooks/BoolHook.js"



function Colores({ resultados, setResultados, setElecciones }) {

    const [colores, setColores] = BoolHook(false);
    const [prendas, setPrendas] = BoolHook(false);


    function handleChange(event) {
        const { name, value } = event.target;
        setElecciones(eleccion => ({
            ...eleccion,
            [name]: value
        }))

        resultados && setResultados()

        
    }

   


    return (
        <>
            <div className="containter colores-prenda">
                <h5 className="titulo-50 inter">Cantidad de Colores y prendas a Estampar</h5>
                <div className="containter opciones-containter">

                    <div className={`icon-image ${colores && "rotacion"}`}
                    style={{ transform: colores && "rotateY(360deg)" }}>

                   

                        <div className="logos-container">
                            <div style={{ display: colores && "none" }}
                                onClick={() => setColores()}>
                                <img className="lapiz" src={lapiz} alt="colores" />
                            </div>


                            <div className="logos-container"
                                style={{ display: !colores && "none" }}>
                                <input type="number"
                                    name="colores"
                                    onChange={handleChange}
                                    className="form-control input-numbers inter" id="exampleFormControlInput1" placeholder="0" />
                                <label htmlFor="exampleFormControlInput1" className="form-label inter">Colores</label>
                            </div>
                        </div>


                    </div>


                    <div className={`icon-image ${prendas && "rotacion"}`}
                    style={{ transform: prendas && "rotateY(360deg)" }}>

                        <div className="logos-container">
                            <div style={{ display: prendas && "none" }}
                                onClick={() => setPrendas()}>
                                <img className="lapiz" src={lapiz2} alt="prendas"
                                    style={{ display: prendas && "none" }}/>
                            </div>





                            <div className="logos-container"
                                style={{ display: !prendas && "none" }}>
                                <input type="number"
                                    name="prendas"
                                    onChange={handleChange}
                                    className="form-control input-numbers inter" id="exampleFormControlInput2" placeholder="0" />
                                <label htmlFor="exampleFormControlInput inter" className="form-label">Prendas</label>

                            </div>

                        </div>



                    </div>
                </div>


            </div>
        </>
    );
}

export default Colores;