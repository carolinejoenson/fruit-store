import PlusMinusButtons from "./plus-minus-buttons.component";
import "./fruit-card-shop.styles.css";


const FruitCardShop = ({fruitCardsToDisplay, totalNumberOfFruits, setTotalNumberOfFruits, setDisplayNumberOnShoppingBasket}) => {

    return (
        <div className="articles">
            {fruitCardsToDisplay.map((fruits) => {
                return (
                    <div key={fruits.id} className="card">
                        <div className="fruitImage"><img alt={fruits.fruit} src={fruits.imageSrc} width="300px"></img></div>
                        <div className="fruitText"><p><strong>{fruits.fruit}</strong></p></div>
                        <div><p><span>{fruits.price}</span>$</p></div>
                        <br/>
                        <PlusMinusButtons amount={fruits.amount} id={fruits.id} totalNumberOfFruits={totalNumberOfFruits} setTotalNumberOfFruits={setTotalNumberOfFruits} setDisplayNumberOnShoppingBasket={setDisplayNumberOnShoppingBasket}></PlusMinusButtons>
                    </div>
                );
            })}
        </div>
    );    
}


export default FruitCardShop;