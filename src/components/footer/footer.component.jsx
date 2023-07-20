import "./footer.styles.css";
import { Link } from 'react-router-dom';


const Footer = () => {
    
    return (
        <div className="footer">
            <Link to="/terms-of-purchase"><h2>Terms of purchase</h2></Link>
            <Link to="/customer-support"><h2>Customer Support</h2></Link>
            <Link to="/system-administration/sign-in"><h2>System Administration</h2></Link>
            <Link to="/about-us"><h2>About Us</h2></Link>
        </div>
    );
}

export default Footer;