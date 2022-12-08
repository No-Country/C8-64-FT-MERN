import "./LoginForm.css"
import logo from "../../assets/Logo Fondo Claro.png"
import { useApi } from "../../hooks/useApi";
import { BoolHook } from "../../hooks/BoolHook";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

function LoginForm() {

    const [, , login] = useApi();
    const [isLoginError, openLoginError] = BoolHook(false)

    const test = (event) => {
        event.preventDefault();
        const { UserName, Password } = event.target
        login(UserName.value, Password.value, openLoginError);
    }


    return (
        <section className="login-container" style={{ backgroundColor: "#f0f2f5" }}>

            <div className="container " style={{ height: "100%" }}>
               
                <div className="container py-5 h-100 " >
                    <div className="row  h-100" >
                        <div className="col-12 col-md-12 d-flex justify-content-center align-items-center" >
                            <div className=""  >
                                <div className="row g-5 d-flex justify-content-center align-items-center" >


                                    <div className=" col-md-5 d-flex justify-content-around align-items-center align-items-md-start flex-column h-100 p-5" > 
                                        <Link to={"/"}><img className="login-logo mb-5" src={logo} alt="app logo" /></Link>
                                        
                                        <h4 className=" text-sm-center text-md-start">ayuda a que tu y tus clientes puedan tener una cotización precisa en segundos.</h4>
                                    </div>


                                    <div className="col col-md-5 d-flex align-items-center card" > 
                                        <div className="card-body p-4 p-lg-4 text-black" style={{ width: "100%" }}>

                                            <form onSubmit={test}>

                                                <div className="d-grid" >

                                                    <div className="form-floating mb-4" >
                                                        <input type="text" id="UserName" className="form-control" placeholder="UserName" />
                                                        <label className="" htmlFor="UserName">User Name</label>
                                                    </div>

                                                    <div className="form-floating mb-4">
                                                        <input type="password" id="Password" className="form-control" placeholder="Password" />
                                                        <label className="" htmlFor="Password">Password</label>
                                                    </div>

                                                    <div className="pt-1 mb-4">
                                                        <button className="btn btn-dark btn-lg btn-block form-control" type="submit" style={{ backgroundColor: "#e1a325", borderColor: "#e1a325" }}>Login</button>
                                                    </div>

                                                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account? <Link to={"/team"} className="">Contact Us</Link></p>

                                                </div>





                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Modal isOpen={isLoginError} closeModal={openLoginError}>
                        <div className="card text-center" style={{ width: " 18rem", backgroundColor: "black" }} >
                            <div className="card-body ">
                                <h5 className="card-title">
                                    <div className="wrapper">
                                        <div className="wrapper-wrong">

                                        </div>
                                    </div>
                                </h5>
                                <h6 className="card-subtitle mb-3">Nombre de usuario o contraseña incorrecta</h6>

                                <div className="d-grid gap-2">
                                    <button className="btn" onClick={() => openLoginError()} >Cerrar</button>
                                </div>

                            </div>
                        </div>
                    </Modal>

            



        </section>
    );
}

export default LoginForm;