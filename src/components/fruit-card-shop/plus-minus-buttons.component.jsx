import { useState, useEffect } from "react";
import ModalFruitAdded from "../modal/modal-fruit-added.component";
import ModalFruitRemoved from "../modal/modal-fruit-removed";
import "./plus-minus-buttons.styles.css";


const PlusMinusButtons = ({id, totalNumberOfFruits, setTotalNumberOfFruits, setDisplayNumberOnShoppingBasket}) => {

    const [minusFruit, setMinusFruit] = useState(0);
    const [plusFruit, setPlusFruit] = useState(0);
    const [showModalFruitAdded, setModalFruitAdded] = useState(false);
    const [showModalFruitRemoved, setModalFruitRemoved] = useState(false);


    function removeModalFruitAdded(){
        setTimeout(() => {
            setModalFruitAdded(false);
        }, 2000);
    }

    function removeModalFruitRemoved(){
        setTimeout(() => {
            setModalFruitRemoved(false);
        }, 2000);
    }


    function fetchAvailableAmountFromServer(){
        fetch("http://localhost:3000/", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                id: id,
                amount: Number(localStorage.getItem(id))
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data === "success"){
                localStorage.setItem(id, Number(minusFruit+1));
                setPlusFruit(plusFruit + 1);
                setMinusFruit(minusFruit + 1);
                setModalFruitAdded(true);
                removeModalFruitAdded();
                localStorage.setItem("total", Number(totalNumberOfFruits + 1));
                setTotalNumberOfFruits(totalNumberOfFruits + 1);
                setDisplayNumberOnShoppingBasket(totalNumberOfFruits + 1);
            }
            else {
                alert("Out of stock")
            }
        });
    }


    const onPlusClick = () => {
            fetchAvailableAmountFromServer();
    }


    const onMinusClick = () => {
        if (minusFruit > 0){
            localStorage.setItem(id, Number(minusFruit-1));
            setMinusFruit(minusFruit - 1);
            setPlusFruit(plusFruit - 1);
            setModalFruitRemoved(true);
            removeModalFruitRemoved();
            localStorage.setItem("total", Number(totalNumberOfFruits - 1));
            setTotalNumberOfFruits(totalNumberOfFruits - 1);
            setDisplayNumberOnShoppingBasket(totalNumberOfFruits - 1);
        }
    } 


    useEffect (() => {
        if (Number(localStorage.getItem(id)) > 0){
            setMinusFruit(Number(localStorage.getItem(id)));
            setPlusFruit(Number(localStorage.getItem(id)));
            setTotalNumberOfFruits(Number(localStorage.getItem("total")));
            setDisplayNumberOnShoppingBasket(Number(localStorage.getItem("total")));
        }
    }, []);


    return (
        <div className="amountSelector">
            <button className="plusMinusButton" onClick={onMinusClick}>-</button>
            <p>{minusFruit}</p>
            <button className="plusMinusButton" onClick={onPlusClick}>+</button>
            { showModalFruitAdded ? <ModalFruitAdded></ModalFruitAdded> : null}
            { showModalFruitRemoved ? <ModalFruitRemoved></ModalFruitRemoved> : null}
        </div>
    );
}


export default PlusMinusButtons;


