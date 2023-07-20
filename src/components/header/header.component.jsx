import "./header.styles.css";
import { Link } from "react-router-dom";


const Header = () => {

    return (
        <div className="header">
            <Link to="/"><h1>FRUIT STORE</h1></Link>
        </div>
    )
}

export default Header;