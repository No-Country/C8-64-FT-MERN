/* import Footer from "./Footer/Footer";
import Header from "./Header/Header"; */
import LoginForm from "./LoginForm/LoginForm";


function Login() {

    const login = JSON.parse(window.localStorage.getItem("login")) || false;
    if (login.logged) {
        window.location.replace("/configuracion");
    }
    else{
        return (
            <div >
               {/*  <Header /> */}
                <LoginForm />
         {/*        <Footer /> */}
            </div>
        );

    }
    
}

export default Login;