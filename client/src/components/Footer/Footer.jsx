import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {


    return (
        <>
            <footer>
                <Link to={"/team"} className="team inter">Meet Team C8-64-FT-MERN</Link>

            </footer>
        </>
    );
}

export default Footer;