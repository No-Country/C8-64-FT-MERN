import "./Banner.css";
import dots from "../assets/dots.jpg"
import logo from "../assets/Logo Fondo Claro.png"

function Banner() {
    return ( 
        <>
        <div className="containter">
            <img className="banner-logo" src={logo} alt="logo de la compañia" />
            <img className="separador mt-4" src={dots} alt="" />
        </div>
        </>
     );
}

export default Banner;