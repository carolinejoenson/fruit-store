import "./number-on-shopping-basket.styles.css";


const NumberOnShoppingBasket = () => {

    return (
        <div className="containerNumberOfFruits">
            <div className="digitNumberOfFruits">
                <p>{localStorage.getItem("total")}</p>
            </div>
        </div>
    );
}

export default NumberOnShoppingBasket;