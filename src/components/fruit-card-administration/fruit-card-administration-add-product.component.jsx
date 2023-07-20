import { useState, useEffect } from "react";
import UpdateFruitCardAdministration from "./fruit-card-administration-update-product.component";
import "./fruit-card-administration.styles.css";


const FruitCardAdministration = () => {

    const [allFruitData, setAllFruitData] = useState([{}]);
    const [fruitName, setFruitName] = useState("");
    const [fruitPrice, setFruitPrice] = useState();
    const [fruitStockBalance, setFruitStockBalance] = useState();
    const [fruitAvailable, setFruitAvailable] = useState();
    const [image, setImage] = useState();
    const [imageName, setImageName] = useState();
    const [preview, setPreview] = useState();


    useEffect(() => {
        fetch("http://localhost:3000/allFruitDataForAdministration", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(allFruitData)
        })
        .then(response => response.json())
        .then(data => {
            setAllFruitData(data);
        })
        .catch(err => console.log("error fetch fruit data on first page"))
    }, []);


    useEffect(() => {
        if (image){
            const reader = new FileReader();
            reader.onloadend = () =>{
                setPreview(reader.result);
            }
            reader.readAsDataURL(image);
        }
        else {
            setPreview(null);
        }
    }, [image]);


    const getFruitName = (event) => {
        var userEnteredFruitName = event.target.value;
        setFruitName(userEnteredFruitName);
    }

    const getFruitPrice = (event) => {
        var userEnteredFruitPrice = event.target.value;
        Number(userEnteredFruitPrice);
        setFruitPrice(userEnteredFruitPrice);
    }

    const getFruitStockBalance = (event) => {
        var userEnteredStockBalance = event.target.value;
        Number(userEnteredStockBalance);
        setFruitStockBalance(userEnteredStockBalance);
    }

    const getFruitAvailable = (event) => {
        var userEnteredFruitAvailable = event.target.value;
        setFruitAvailable(userEnteredFruitAvailable);
    }


    const sendDataToBackend = () => {
        sendImageToServer();
        sendFruitDataToServer();
    }

    function sendImageToServer(){
        const formData = new FormData(); 
        formData.append("file", image);
        fetch("http://localhost:3000/addImageToServer", {
            method: "post",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data !== "success"){
                alert("Something went wrong, please try again")
            }
        })
        .catch(err => console.log("error sending image to backend"));
    }

    function sendFruitDataToServer(){
        fetch("http://localhost:3000/addProductToDatabase", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                fruit: fruitName,
                price: fruitPrice,
                amount: fruitStockBalance,
                available: fruitAvailable,
                imageSrc: imageName
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data === "success"){
                alert("Product was added to database");
                window.location.reload(false);
            }
            else{
                alert("Something went wrong, please try again")
            }
        })
        .catch(err => console.log("error sending data to backend"))
    }


    return (
        <div>
            <h2 style={{textAlign: "center"}}>Add new article to database</h2>
            <form onSubmit={sendDataToBackend}>
                <fieldset className="cardWithDetailsForAdministration">
                <legend style={{textAlign: "center", fontSize: "1.2em", marginBottom: "15px", letterSpacing: "0.2px"}}>Add new article</legend>
                    <ul>
                        <li className="objectDetails">
                            <label for="name"><strong>Name: </strong>&nbsp;</label>
                            <input id="name" className="inputAdministrationName" onChange={getFruitName} type="text" required></input>
                        </li>
                        <li className="objectDetails">
                            <label for="price"><strong>Price: </strong>&nbsp;</label>
                            <input id="price" className="inputAdministrationPrice" onChange={getFruitPrice} type="number" required></input><span>$</span>
                        </li>
                        <li className="objectDetails">
                            <label for="amount"><strong>Stock balance: </strong>&nbsp;</label>
                            <input id="amount" className="inputAdministrationStockBalance" onChange={getFruitStockBalance} type="number" required></input>
                        </li>
                        <li className="objectDetails">
                            <label for="available"><strong>Available for sale: </strong>&nbsp;</label>
                            <select id="available" required onChange={getFruitAvailable}>
                                <option value=""></option>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </li>
                        <li className="objectDetails" style={{display: "block"}}>
                            <label for="image"><strong>Image: </strong>&nbsp;</label>
                            <input id="image" required type="file" accept="image/jpeg" name="file" onChange={(event) => {
                                const file = event.target.files[0];
                                setImage(file);
                                setImageName(event.target.files[0].name);
                            }}></input><br></br>
                            {preview ? (<img alt={"preview"} src={preview} width="300px"></img>) : null}
                        </li>
                    </ul>
                    <button type="submit"><strong>ADD TO DATABASE</strong></button>
                </fieldset>
            </form>
            <h2 style={{textAlign: "center"}}>Update article in database</h2>    
            {allFruitData.map((fruits) => {
                return (
                    <UpdateFruitCardAdministration allFruitData={fruits}></UpdateFruitCardAdministration>
                );
            })}
        </div>
    );    
}


export default FruitCardAdministration;