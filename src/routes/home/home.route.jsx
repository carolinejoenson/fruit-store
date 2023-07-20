import { useState, useEffect, Fragment } from "react";
import ShoppingBasket from "../../components/shopping-basket/shopping-basket.component";
import Checkout from "../checkout/checkout.component";
import NumberOnShoppingBasket from "../../components/number-on-shopping-basket/number-on-shopping-basket.component";
import Header from "../../components/header/header.component";
import SearchBox from "../../components/search-box/search-box.component";
import FruitCardShop from "../../components/fruit-card-shop/fruit-card-shop.component";
import Footer from "../../components/footer/footer.component";


const Home = ({fruitData, minusFruit, setMinusFruit, plusFruit, setPlusFruit, displayNumberOnShoppingBasket, setDisplayNumberOnShoppingBasket}) => {

    const [searchField, setSearchField] = useState("");
    const [filteredFruits, setFilteredFruits] = useState(fruitData);
    const [totalNumberOfFruits, setTotalNumberOfFruits] = useState(0);

    const getSearchFieldString = (event) => {
        var searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
    }

    useEffect(() => {
        const filteredFruits = fruitData.filter((fruits) => {
            return fruits.fruit.toLowerCase().includes(searchField);
        });
        setFilteredFruits(filteredFruits);
    }, [searchField, fruitData]);


    return (
        <Fragment>
            <ShoppingBasket onClick={() => {<Checkout></Checkout>}}></ShoppingBasket>
            { displayNumberOnShoppingBasket ? <NumberOnShoppingBasket></NumberOnShoppingBasket> : null }
            <Header></Header>
            <SearchBox fruitData={fruitData} getSearchFieldString={getSearchFieldString}></SearchBox>
            <FruitCardShop fruitCardsToDisplay={filteredFruits} totalNumberOfFruits={totalNumberOfFruits} setTotalNumberOfFruits={setTotalNumberOfFruits} setDisplayNumberOnShoppingBasket={setDisplayNumberOnShoppingBasket} minusFruit={minusFruit} setMinusFruit={setMinusFruit} plusFruit={plusFruit} setPlusFruit={setPlusFruit}></FruitCardShop>
            <Footer></Footer>
        </Fragment>
      );
    }


export default Home;