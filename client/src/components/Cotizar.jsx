import "./Cotizar.css"

function Cotizar() {
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
                        <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input" />
                    </div>
                    <input type="text" className="form-control non-clickable" aria-label="Text input with checkbox" value="¿Conversión de U$D a ARS?" readOnly />
                </div>




                <div className="d-grid gap-2">


                    <button type="button" className="  btn-cotizar " >Cotizar</button>

                </div>


            </div>
        </>
    );
}

export default Cotizar;