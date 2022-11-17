import imagen from "../assets/colores.jpg";
import imagen2 from "../assets/prendas.jpg"
import "./FondoPrenda.css"

function Colores() {
    return ( 
        <>
        <div className="containter fondo-prenda">
            <h5>Cantidad de Colores y prendas a Estampar</h5>
            <div className="containter opciones-containter">
                <div className="icon-image"
                ><img src={imagen} alt="colores"  /></div>
                <div className="icon-image"><img src={imagen2} alt="prendas"  /></div>
            </div>
            

        </div>
        </>
     );
}

export default Colores;