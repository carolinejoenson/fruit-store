import "./shopping-basket.styles.css";
import ShoppingBasketPng from "../../assets/shopping-basket-icon.png";
import { Link } from "react-router-dom";


const ShoppingBasket = () => {
    return (
        <div className="shoppingBasket" >
            <Link to="/checkout"><img src={ShoppingBasketPng} alt="shopping-basket-icon" width="40px"></img></Link>
        </div>
    );
}


export default ShoppingBasket;