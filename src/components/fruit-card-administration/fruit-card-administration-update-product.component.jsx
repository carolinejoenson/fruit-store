import { useState, useEffect } from "react";
import "./fruit-card-administration.styles.css";
import "../search-box/search-box.styles.css";


const UpdateFruitCardAdministration = ({allFruitData}) => {

    const [newFruitName, setNewFruitName] = useState(allFruitData.fruit);
    const [newFruitPrice, setNewFruitPrice] = useState(allFruitData.price);
    const [newFruitStockBalance, setNewFruitStockBalance] = useState(allFruitData.amount);
    const [newFruitAvailable, setNewFruitAvailable] = useState(allFruitData.available);
    const [newImage, setNewImage] = useState();
    const [newImageName, setNewImageName] = useState(allFruitData.imageSrc);
    const [newPreview, setNewPreview] = useState();


    const convertBooleanToString = () => {
        if (allFruitData.available===true){
            return "Yes"
        }
        else {
            return "No"
        }
    }


    useEffect(() => {
        if (newImage){
            const newReader = new FileReader();
            newReader.onloadend = () =>{
                setNewPreview(newReader.result);
            }
            newReader.readAsDataURL(newImage);
        }
        else {
            setNewPreview(null);
        }
    }, [newImage]);


    const getNewFruitName = (event) => {
        var userEnteredNewFruitName = event.target.value;
        setNewFruitName(userEnteredNewFruitName);
    }

    const getNewFruitPrice = (event) => {
        var userEnteredNewFruitPrice = event.target.value;
        Number(userEnteredNewFruitPrice);
        setNewFruitPrice(userEnteredNewFruitPrice);
    }

    const getNewFruitStockBalance = (event) => {
        var userEnteredNewStockBalance = event.target.value;
        Number(userEnteredNewStockBalance);
        setNewFruitStockBalance(userEnteredNewStockBalance);
    }

    const getNewFruitAvailable = (event) => {
        var userEnteredNewFruitAvailable = event.target.value;
        setNewFruitAvailable(userEnteredNewFruitAvailable);
    }


    const updateData = () => {
        if (newImage){
            sendNewImageToServer();
        }
        sendUpdatedFruitDataToServer();
    }


    function sendNewImageToServer(){
        const newFormData = new FormData(); 
        newFormData.append("file", newImage);
        fetch("http://localhost:3000/addImageToServer", {
            method: "post",
            body: newFormData
        })
        .then(response => response.json())
        .then(data => {
            if (data !== "success"){
                alert("Something went wrong, please try again")
            }
        })
        .catch(err => console.log("error sending image to backend for update"));
    }


    function sendUpdatedFruitDataToServer(){
        fetch("http://localhost:3000/updateProductsInDatabase", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                id: allFruitData.id,
                fruit: newFruitName,
                price: newFruitPrice,
                amount: newFruitStockBalance,
                available: newFruitAvailable,
                imageSrc: newImageName
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data === "success"){
                alert("Database was updated");
            }
            else{
                alert("Something went wrong, please try again")
            }
        })
        .catch(err => console.log("error updating data"))
    }


    return (
        <div>
            <form onSubmit={updateData}>
                <fieldset className="cardWithDetailsForAdministration">
                <legend style={{textAlign: "center", fontSize: "1.2em", marginBottom: "15px", letterSpacing: "0.2px"}}>Update article</legend>
                    <ul>
                        <li className="objectDetails">
                            <label for="name"><strong>Name: </strong>&nbsp;</label>
                            <p>{allFruitData.fruit}&nbsp;</p>
                            <input id="name" className="inputAdministrationName" onChange={getNewFruitName} type="text"></input>
                        </li>
                        <li className="objectDetails">
                            <label for="price"><strong>Price: </strong>&nbsp;</label>
                            <p>{allFruitData.price}&nbsp;</p>
                            <input id="price" className="inputAdministrationPrice" onChange={getNewFruitPrice} type="number"></input><span>$</span>
                        </li>
                        <li className="objectDetails">
                            <label for="amount"><strong>Stock balance: </strong>&nbsp;</label>
                            <p>{allFruitData.amount}&nbsp;</p>
                            <input id="amount" className="inputAdministrationStockBalance" onChange={getNewFruitStockBalance} type="number"></input>
                        </li>
                        <li className="objectDetails">
                            <label for="available"><strong>Available for sale: </strong>&nbsp;</label>
                            <p>{convertBooleanToString()}&nbsp;</p>
                            <select id="available" onChange={getNewFruitAvailable}>
                                <option value=""></option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </li>
                        <li className="objectDetails" style={{display: "block"}}>
                            <label for="image"><strong>Image: </strong>&nbsp;</label>
                            <input id="image" type="file" accept="image/jpeg" name="file" onChange={(event) => {
                                const newFile = event.target.files[0];
                                setNewImage(newFile);
                                setNewImageName(event.target.files[0].name);
                            }}></input><br></br>
                            {newPreview ? (<img alt={"preview"} src={newPreview} width="300px"></img>) : (<img src={allFruitData.imageSrc} alt="image of fruit" width="300px"></img>)}
                        </li>
                    </ul>
                    <button type="submit"><strong>UPDATE DATABASE</strong></button>
                </fieldset>
            </form> 
        </div>
    );    
}


export default UpdateFruitCardAdministration;