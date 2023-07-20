import ShoppingBasket from "../../components/shopping-basket/shopping-basket.component";
import NumberOnShoppingBasket from "../../components/number-on-shopping-basket/number-on-shopping-basket.component";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";


const Support = ({displayNumberOnShoppingBasket}) => {
    return (
        <div>
            <ShoppingBasket></ShoppingBasket>
            { displayNumberOnShoppingBasket ? <NumberOnShoppingBasket></NumberOnShoppingBasket> : null }
            <Header></Header>
            <h2 style={{textAlign: "center", paddingBottom: "500px"}}>Customer Support</h2>
            <Footer></Footer>
        </div>
    );
}


export default Support;