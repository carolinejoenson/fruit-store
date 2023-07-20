import { useState, useEffect, Fragment } from "react";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import "./checkout.styles.css";


const Checkout = ({fruitData}) => {

    const [fruitArray, setFruitArray] = useState([]);

    useEffect(() => {
        getFruitArray();
    }, [fruitData]);

    function updateAmountInFruitData(){
        for (var i=0; i<fruitData.length; i++){
            fruitData[i].amount = localStorage.getItem(fruitData[i].id)
        }
        return fruitData;
    }
    updateAmountInFruitData();


  function getFruitArray(){
    var newFruitData = fruitData.filter((fruits) => {
        if (Number(localStorage.getItem(fruits.id))!== 0){
            return fruits;
        }
    });
    setFruitArray(newFruitData);
    }
   
    
    function calculateTotalPrice(){
        const totalPriceForEachFruit = fruitArray.map((fruits) => {
            const price = Number(fruits.price);
            const fruitAmount =  Number(localStorage.getItem(fruits.id));
            const totalPriceEachFruit = price * fruitAmount;
            return totalPriceEachFruit;
        });
        const totalPrice = totalPriceForEachFruit.reduce((accumulator, number) => {
            return (accumulator + number);
        }, 0);
        return totalPrice;
    }

    
    function checkAvailableAmountOnCheckoutClick(){
        fetch("http://localhost:3000/checkout", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(fruitData)
        })
        .then(response => response.json())
        .then(data => {
            if (data !== "success"){
               alert(data)
            }
        })
        .catch(err => console.log("error available amount"))
    }
 

    return (
        <Fragment>
            <Header></Header>
            <div className="containerCheckoutCards">
                <div className="checkoutBackground">
                    <h2><span>{localStorage.getItem("total")}</span> Fruits</h2>
                </div>
            </div>
            <div className="containerCheckoutCards">
                <div className="checkoutBackground">
                    {fruitArray.map((fruits) => {
                        return (
                            <div className="fruitCardInCheckout" key={fruits.id}>
                                <p>{fruits.fruit} <span>{fruits.price}</span>$</p>
                                <div className="amountSelectorInCheckout">
                                    <button className="plusMinusButtonInCheckout" onClick={() => {
                                        const totalNumberOfOneFruit = Number(localStorage.getItem(fruits.id));
                                        const totalNumberOfFruits = Number(localStorage.getItem("total"));
                                        if (totalNumberOfOneFruit > 0){
                                            localStorage.setItem(fruits.id, Number(totalNumberOfOneFruit - 1));
                                            localStorage.setItem("total", Number(totalNumberOfFruits - 1));
                                            getFruitArray();
                                        }
                                    }}>-
                                    </button>
                                    <p className="displayCount">{Number(localStorage.getItem(fruits.id))}</p>
                                    <button className="plusMinusButtonInCheckout" onClick={() => {
                                        fetch("http://localhost:3000/addfruitincheckout", {
                                            method: "post",
                                            headers: {"Content-Type": "application/json"},
                                            body: JSON.stringify({
                                                id: fruits.id,
                                                amount: Number(localStorage.getItem(fruits.id))
                                            })
                                        })
                                        .then(response => response.json())
                                        .then(data => {
                                            const totalNumberOfOneFruit = Number(localStorage.getItem(fruits.id));
                                            if (data === "success"){
                                                localStorage.setItem(fruits.id, Number(totalNumberOfOneFruit + 1));
                                                const totalNumberOfFruits = Number(localStorage.getItem("total"));
                                                localStorage.setItem("total", Number(totalNumberOfFruits + 1));
                                                getFruitArray();
                                            }
                                            else{
                                               alert("Out of stock");
                                            }
                                        })
                                        .catch(err => console.log("error"))
                                    }}>+
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="containerCheckoutCards">
                <div className="checkoutBackground">
                    <h2>Total <span>{calculateTotalPrice()}</span>$</h2>
                </div>
            </div>
            <div className="containerCheckoutCards">
                <div className="checkoutBackground">
                    <button className="checkoutButton" onClick={checkAvailableAmountOnCheckoutClick}>Checkout</button>
                </div>
            </div>
            <Footer></Footer>
        </Fragment>
    );
}


export default Checkout;