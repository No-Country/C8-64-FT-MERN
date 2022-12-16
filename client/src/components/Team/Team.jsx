import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { opcionesApp } from "../../utils/opcionesApp";
import "./Team.css"

function Team() {

    const { integrantes } = opcionesApp();
    return (
        <>
            <Header />
            <div className="team-container container text-center">
                <h2 className="team-title mt-5 mb-5 inter">Team C8-64-FT-MERN</h2>

                <div className="cards-container">



                    {
                        integrantes.map(integrante => {
                            return (
                                <div className="card team-card" style={{ width: "18rem" }}>
                                    <img src={integrante.foto} className="card-img-top card-foto" alt="Foto del participante" />
                                    <div className="card-body">
                                        <h5 className="card-title nombre inter">{integrante.nombre}</h5>
                                        <p className="card-text funcion inter">{integrante.ocupacion}</p>
                                        <ul className="list-group list-group-flush">

                                            {integrante.links.map(link => {
                                                return (
                                                    <li className="list-group-item prueba-card">
                                                        <div className="d-flex">
                                                            {link.logo}
                                                            <a className="prueba-card inter" target="_blank" rel="noreferrer" href={link.link}>{link.descripcion}</a>
                                                        </div>
                                                    </li>
                                                )
                                            })}




                                        </ul>
                                    </div>
                                </div>

                            )
                        })
                    }






                </div>


            </div>
            <Footer />
        </>
    );
}

export default Team;