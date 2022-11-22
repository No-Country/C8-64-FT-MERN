import "./Cotizacion.css"

function Cotizacion() {
    return ( 
        <div className="container">
            <div className="text-container subrayado">
            <h3 className="matriceria">Matriceria:</h3>
            <p className="valores">$23</p>            
            </div>         
            <p className="leyenda">Costo calculado en base al tipo de Shablón y la cantidad de colores.</p>

            <div className="text-container subrayado">
            <h4 className="items">Precio por prenda:</h4>
            <p className="valores">$0.01</p>    
            </div>         
            <p className="leyenda">Costo calculado en base al tipo de fondo y tipo de pintura.</p>

            <div className="text-container subrayado">
            <h4 className="items">Costo total de prendas:</h4>
            <p className="valores">$2.85</p>    
            </div>         
            <p className="leyenda">Costo calculado en base al costo de la prenda y la cantidad a producir.</p>
    
            <div className="text-container subrayado">
            <h4 className="items">Matricería y Pintura:</h4>
            <p className="valores">$25.85</p>    
            </div>         
            <p className="leyenda">Suma del costo de matricería y el costo total de las prendas.</p>
            
            <div className="text-container subrayado">
            <h4 className="items">Pintura por prenda:</h4>
            <p className="valores">4 Grs</p>    
            </div>         
            <p className="leyenda">Costo calculado en base al rendimiento del tipo de pintura elegido.</p>
            
            <div className="text-container subrayado">
            <h4 className="items">Pintura total necesaria:</h4>
            <p className="valores">1000 Grs</p>    
            </div>         
            <p className="leyenda">Costo calculado en base a la pintura por prenda y la cantidad a producir.</p>

        </div>
        
     );
}

export default Cotizacion;