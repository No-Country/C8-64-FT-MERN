import "./Cotizacion.css"



function Cotizacion({ valores, elecciones, resultados }) {


    if (valores && elecciones.fondo !==null) {

        const matriceria = elecciones.opciones[0] ? ((valores.shablon[1] * elecciones.colores) * elecciones.cotizacion) : ((valores.shablon[0] * elecciones.colores) * elecciones.cotizacion)
        const precioXPrenda = (((valores.colores[elecciones.fondo][elecciones.pintura]) / (valores.rendimiento[elecciones.fondo][elecciones.estampado])) * elecciones.cotizacion);
        const precioTPrenda = precioXPrenda * elecciones.prendas;
        const matYPintura = matriceria + precioTPrenda;
        const pinturaXPrenda = 1000 / valores.rendimiento[elecciones.fondo][elecciones.estampado];
        const pinturaTotal = pinturaXPrenda * elecciones.prendas;

        return (
            <div className={`container resultados-container muestra${resultados ? "1" : "0 no-display"}`}>

                <div>
                    <div className="text-container subrayado">
                        <h4 className="items inter">Pintura por prenda:</h4>
                        <p className="valores inter">{(Math.round(pinturaXPrenda * 100) / 100).toFixed(2)} Grs</p>
                    </div>
                    <p className="leyenda inter">Costo calculado en base al rendimiento del tipo de pintura elegido.</p>
                </div>

                <div>
                    <div className="text-container subrayado">
                        <h4 className="items inter">Pintura necesaria:</h4>
                        <p className="valores inter">{(Math.round(pinturaTotal * 100) / 100).toFixed(2)} Grs</p>
                    </div>
                    <p className="leyenda inter">Costo calculado en base a la pintura por prenda y la cantidad a producir.</p>
                </div>

                <div> 
                    <div className="text-container subrayado">
                        <h4 className="items inter">Precio por prenda:</h4>
                        <p className="valores inter">{elecciones.cotizacion === 1? "U$D": "$"} {(Math.round(precioXPrenda * 100) / 100).toFixed(2)}</p>
                    </div>
                    <p className="leyenda inter">Costo calculado en base al tipo de fondo y tipo de pintura.</p>
                </div>

                <div>
                    <div className="text-container subrayado">
                        <h4 className="items inter">Costo total de pintura:</h4>
                        <p className="valores inter">{elecciones.cotizacion === 1? "U$D": "$"} {(Math.round(precioTPrenda * 100) / 100).toFixed(2)}</p>
                    </div>
                    <p className="leyenda inter">Costo calculado en base al costo de la prenda y la cantidad a producir.</p>
                </div>

                <div>
                    <div className="text-container subrayado">
                        <h3 className="items inter">Matriceria:</h3>
                        <p className="valores inter">{elecciones.cotizacion === 1? "U$D": "$"} {(Math.round(matriceria * 100) / 100).toFixed(2)}</p>
                    </div>
                    <p className="leyenda inter">Costo calculado en base al tipo de Shablón y la cantidad de colores.</p>
                </div>

                <div>
                    <div className="text-container subrayado">
                        <h3 className="total inter">Matricería y Pintura:</h3>
                        <p className="valores total inter">{elecciones.cotizacion === 1? "U$D": "$"} {(Math.round(matYPintura * 100) / 100).toFixed(2)}</p>
                    </div>
                    <p className="leyenda inter">Suma del costo de matricería y el costo total de las prendas.</p>
                </div>
            </div>

        )

    }

}

export default Cotizacion;