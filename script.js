let fruitData = {
    fruits: [
        {
            fruit: "red apple",
            amount: Number(window.localStorage.getItem("redApple"))
        },
        {
            fruit: "green apple",
            amount: Number(window.localStorage.getItem("greenApple"))
        },
        {
            fruit: "orange",
            amount: Number(window.localStorage.getItem("orange"))
        },
        {
            fruit: "banana",
            amount: Number(window.localStorage.getItem("banana"))
        },
        {
            fruit: "grapes",
            amount: Number(window.localStorage.getItem("grapes"))
        },
        {
            fruit: "honeydew melon",
            amount: Number(window.localStorage.getItem("honeydewMelon"))
        },
        {
            fruit: "watermelon",
            amount: Number(window.localStorage.getItem("watermelon"))
        },
        {
            fruit: "lemon",
            amount: Number(window.localStorage.getItem("lemon"))
        },
        {
            fruit: "mango",
            amount: Number(window.localStorage.getItem("mango"))
        },
        {
            fruit: "pomegranate",
            amount: Number(window.localStorage.getItem("pomegranate"))
        }
    ]
}

//display fruit price on first page
function fetchPriceOnFirstPage(){
    fetch("http://localhost:3000/price", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(fruitData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("priceRedApple").textContent = data[0].price;
        document.getElementById("priceGreenApple").textContent = data[1].price;
        document.getElementById("priceOrange").textContent = data[2].price;
        document.getElementById("priceBanana").textContent = data[3].price;
        document.getElementById("priceGrapes").textContent = data[4].price;
        document.getElementById("priceHoneydewMelon").textContent = data[5].price;
        document.getElementById("priceWatermelon").textContent = data[6].price;
        document.getElementById("priceLemon").textContent = data[7].price;
        document.getElementById("priceMango").textContent = data[8].price;
        document.getElementById("pricePomegranate").textContent = data[9].price;
    })
    .catch(err => console.log("error fetch price on first page"))
}

//remove modal displayed after fruit has been added
const modalAddFruit = document.getElementById("modalContainerFruitAdded");
function removeModalFruitAdded(){
    setTimeout(() => {
    modalAddFruit.style.display = "none";
  }, 2000);
}

//remove modal displayed after fruit has been removed
const modalRemoveFruit = document.getElementById("modalContainerFruitRemoved");
function removeModalFruitRemoved(){
    setTimeout(() => {
    modalRemoveFruit.style.display = "none";
  }, 2000);
}

//fetch available amount of fruit when adding fruit to shopping cart
function fetchAmountRedApplesFromServer(){
    fetch("http://localhost:3000/", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            fruit: "red apple",
            amount: Number(window.localStorage.getItem("redApple"))
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data === "success"){
            countRedApple++;
            displayRedApple.textContent = countRedApple;
            modalAddFruit.style.display = "block";
            removeModalFruitAdded();
            displayNumberOfFruitsInShoppingCart();
            window.localStorage.setItem("redApple", Number(countRedApple));
            window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
        }
        else {
            alert("Out of stock")
        }
    })
}

function fetchAmountGreenApplesFromServer(){
    fetch("http://localhost:3000/", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            fruit: "green apple",
            amount: Number(window.localStorage.getItem("greenApple"))
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data === "success"){
            countGreenApple++;
            displayGreenApple.textContent = countGreenApple;
            modalAddFruit.style.display = "block";
            removeModalFruitAdded();
            displayNumberOfFruitsInShoppingCart();
            window.localStorage.setItem("greenApple", Number(countGreenApple));
            window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
        }
        else {
            alert("Out of stock")
        }
    })
}

function fetchAmountOrangesFromServer(){
    fetch("http://localhost:3000/", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            fruit: "orange",
            amount: Number(window.localStorage.getItem("orange"))
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data === "success"){
            countOrange++;
            displayOrange.textContent = countOrange;
            modalAddFruit.style.display = "block";
            removeModalFruitAdded();
            displayNumberOfFruitsInShoppingCart();
            window.localStorage.setItem("orange", Number(countOrange));
            window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
        }
        else {
            alert("Out of stock")
        }
    })
}

function fetchAmountBananasFromServer(){
    fetch("http://localhost:3000/", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            fruit: "banana",
            amount: Number(window.localStorage.getItem("banana"))
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data === "success"){
            countBanana++;
            displayBanana.textContent = countBanana;
            modalAddFruit.style.display = "block";
            removeModalFruitAdded();
            displayNumberOfFruitsInShoppingCart();
            window.localStorage.setItem("banana", Number(countBanana));
            window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
        }
        else {
            alert("Out of stock")
        }
    })
}

function fetchAmountGrapesFromServer(){
    fetch("http://localhost:3000/", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            fruit: "grapes",
            amount: Number(window.localStorage.getItem("grapes"))
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data === "success"){
            countGrapes++;
            displayGrapes.textContent = countGrapes;
            modalAddFruit.style.display = "block";
            removeModalFruitAdded();
            displayNumberOfFruitsInShoppingCart();
            window.localStorage.setItem("grapes", Number(countGrapes));
            window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
        }
        else {
            alert("Out of stock")
        }
    })
}

function fetchAmountHoneydewMelonFromServer(){
    fetch("http://localhost:3000/", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            fruit: "honeydew melon",
            amount: Number(window.localStorage.getItem("honeydewMelon"))
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data === "success"){
            countHoneydewMelon++;
            displayHoneydewMelon.textContent = countHoneydewMelon;
            modalAddFruit.style.display = "block";
            removeModalFruitAdded();
            displayNumberOfFruitsInShoppingCart();
            window.localStorage.setItem("honeydewMelon", Number(countHoneydewMelon));
            window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
        }
        else {
            alert("Out of stock")
        }
    })
}

function fetchAmountWatermelonFromServer(){
    fetch("http://localhost:3000/", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(            {
            fruit: "watermelon",
            amount: Number(window.localStorage.getItem("watermelon"))
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data === "success"){
            countWatermelon++;
            displayWatermelon.textContent = countWatermelon;
            modalAddFruit.style.display = "block";
            removeModalFruitAdded();
            displayNumberOfFruitsInShoppingCart();
            window.localStorage.setItem("watermelon", Number(countWatermelon));
            window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
        }
        else {
            alert("Out of stock")
        }
    })
}

function fetchAmountLemonFromServer(){
    fetch("http://localhost:3000/", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(          {
            fruit: "lemon",
            amount: Number(window.localStorage.getItem("lemon"))
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data === "success"){
            countLemon++;
            displayLemon.textContent = countLemon;
            modalAddFruit.style.display = "block";
            removeModalFruitAdded();
            displayNumberOfFruitsInShoppingCart();
            window.localStorage.setItem("lemon", Number(countLemon));
            window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
        }
        else {
            alert("Out of stock")
        }
    })
}

function fetchAmountMangoFromServer(){
    fetch("http://localhost:3000/", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(            {
            fruit: "mango",
            amount: Number(window.localStorage.getItem("mango"))
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data === "success"){
            countMango++;
            displayMango.textContent = countMango;
            modalAddFruit.style.display = "block";
            removeModalFruitAdded();
            displayNumberOfFruitsInShoppingCart();
            window.localStorage.setItem("mango", Number(countMango));
            window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
        }
        else {
            alert("Out of stock")
        }
    })
}

function fetchAmountPomegranateFromServer(){
    fetch("http://localhost:3000/", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(            {
            fruit: "pomegranate",
            amount: Number(window.localStorage.getItem("pomegranate"))
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data === "success"){
            countPomegranate++;
            displayPomegranate.textContent = countPomegranate;
            modalAddFruit.style.display = "block";
            removeModalFruitAdded();
            displayNumberOfFruitsInShoppingCart();
            window.localStorage.setItem("pomegranate", Number(countPomegranate));
            window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
        }
        else {
            alert("Out of stock")
        }
    })
}


//change amount of a fruit and store the number in localStorage, display modal
//red apple
const minusRedApple = document.getElementById("minusOneRedApple");
const plusRedApple = document.getElementById("plusOneRedApple");
const displayRedApple = document.getElementById("countRedApple");
let countRedApple = 0;
displayRedApple.textContent = countRedApple;

plusRedApple.addEventListener("click", function(){
    fetchAmountRedApplesFromServer();
});

minusRedApple.addEventListener("click", function(){
    if (countRedApple>0){
        countRedApple--;
        displayRedApple.textContent = countRedApple;
        modalRemoveFruit.style.display = "block";
        removeModalFruitRemoved();
        displayNumberOfFruitsInShoppingCart();
        window.localStorage.setItem("redApple", Number(countRedApple));
        window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
    }
});

//green apple
const minusGreenApple = document.getElementById("minusOneGreenApple");
const plusGreenApple = document.getElementById("plusOneGreenApple");
const displayGreenApple = document.getElementById("countGreenApple");
let countGreenApple = 0;
displayGreenApple.textContent = countGreenApple;

plusGreenApple.addEventListener("click", function(){
    fetchAmountGreenApplesFromServer();
});

minusGreenApple.addEventListener("click", function(){
    if (countGreenApple>0){
        countGreenApple--;
        displayGreenApple.textContent = countGreenApple;
        modalRemoveFruit.style.display = "block";
        removeModalFruitRemoved();
        displayNumberOfFruitsInShoppingCart();
        window.localStorage.setItem("greenApple", Number(countGreenApple));
        window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
    }
});

//orange
const minusOrange = document.getElementById("minusOneOrange");
const plusOrange = document.getElementById("plusOneOrange");
const displayOrange = document.getElementById("countOrange");
let countOrange = 0;
displayOrange.textContent = countOrange;

plusOrange.addEventListener("click", function(){
    fetchAmountOrangesFromServer();
});

minusOrange.addEventListener("click", function(){
    if (countOrange>0){
        countOrange--;
        displayOrange.textContent = countOrange;
        modalRemoveFruit.style.display = "block";
        removeModalFruitRemoved();
        displayNumberOfFruitsInShoppingCart();
        window.localStorage.setItem("orange", Number(countOrange));
        window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
    }
});

//banana
const minusBanana = document.getElementById("minusOneBanana");
const plusBanana = document.getElementById("plusOneBanana");
const displayBanana = document.getElementById("countBanana");
let countBanana = 0;
displayBanana.textContent = countBanana;

plusBanana.addEventListener("click", function(){
    fetchAmountBananasFromServer()
});

minusBanana.addEventListener("click", function(){
    if (countBanana>0){
        countBanana--;
        displayBanana.textContent = countBanana;
        modalRemoveFruit.style.display = "block";
        removeModalFruitRemoved();
        displayNumberOfFruitsInShoppingCart();
        window.localStorage.setItem("banana", Number(countBanana));
        window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
    }
});

//grapes
const minusGrapes = document.getElementById("minusOneGrapes");
const plusGrapes = document.getElementById("plusOneGrapes");
const displayGrapes = document.getElementById("countGrapes");
let countGrapes = 0;
displayGrapes.textContent = countGrapes;

plusGrapes.addEventListener("click", function(){
    fetchAmountGrapesFromServer();
});

minusGrapes.addEventListener("click", function(){
    if (countGrapes>0){
        countGrapes--;
        displayGrapes.textContent = countGrapes;
        modalRemoveFruit.style.display = "block";
        removeModalFruitRemoved();
        displayNumberOfFruitsInShoppingCart();
        window.localStorage.setItem("grapes", Number(countGrapes));
        window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
    }
});

//honeydew melon
const minusHoneydewMelon = document.getElementById("minusOneHoneydewMelon");
const plusHoneydewMelon = document.getElementById("plusOneHoneydewMelon");
const displayHoneydewMelon = document.getElementById("countHoneydewMelon");
let countHoneydewMelon = 0;
displayHoneydewMelon.textContent = countHoneydewMelon;

plusHoneydewMelon.addEventListener("click", function(){
    fetchAmountHoneydewMelonFromServer();
});

minusHoneydewMelon.addEventListener("click", function(){
    if (countHoneydewMelon>0){
        countHoneydewMelon--;
        displayHoneydewMelon.textContent = countHoneydewMelon;
        modalRemoveFruit.style.display = "block";
        removeModalFruitRemoved();
        displayNumberOfFruitsInShoppingCart();
        window.localStorage.setItem("honeydewMelon", Number(countHoneydewMelon));
        window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
    }
});

//watermelon
const minusWatermelon = document.getElementById("minusOneWatermelon");
const plusWatermelon = document.getElementById("plusOneWatermelon");
const displayWatermelon = document.getElementById("countWatermelon");
let countWatermelon = 0;
displayWatermelon.textContent = countWatermelon;

plusWatermelon.addEventListener("click", function(){
    fetchAmountWatermelonFromServer();
});

minusWatermelon.addEventListener("click", function(){
    if (countWatermelon>0){
        countWatermelon--;
        displayWatermelon.textContent = countWatermelon;
        modalRemoveFruit.style.display = "block";
        removeModalFruitRemoved();
        displayNumberOfFruitsInShoppingCart();
        window.localStorage.setItem("watermelon", Number(countWatermelon));
        window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
    }
});

//lemon
const minusLemon = document.getElementById("minusOneLemon");
const plusLemon = document.getElementById("plusOneLemon");
const displayLemon = document.getElementById("countLemon");
let countLemon = 0;
displayLemon.textContent = countLemon;

plusLemon.addEventListener("click", function(){
    fetchAmountLemonFromServer();
});

minusLemon.addEventListener("click", function(){
    if (countLemon>0){
        countLemon--;
        displayLemon.textContent = countLemon;
        modalRemoveFruit.style.display = "block";
        removeModalFruitRemoved();
        displayNumberOfFruitsInShoppingCart();
        window.localStorage.setItem("lemon", Number(countLemon));
        window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
    }
});

//mango
const minusMango = document.getElementById("minusOneMango");
const plusMango = document.getElementById("plusOneMango");
const displayMango = document.getElementById("countMango");
let countMango = 0;
displayMango.textContent = countMango;

plusMango.addEventListener("click", function(){
    fetchAmountMangoFromServer();
});

minusMango.addEventListener("click", function(){
    if (countMango>0){
        countMango--;
        displayMango.textContent = countMango;
        modalRemoveFruit.style.display = "block";
        removeModalFruitRemoved();
        displayNumberOfFruitsInShoppingCart();
        window.localStorage.setItem("mango", Number(countMango));
        window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
    }
});

//pomegranate
const minusPomegranate = document.getElementById("minusOnePomegranate");
const plusPomegranate = document.getElementById("plusOnePomegranate");
const displayPomegranate = document.getElementById("countPomegranate");
let countPomegranate = 0;
displayPomegranate.textContent = countPomegranate;

plusPomegranate.addEventListener("click", function(){
    fetchAmountPomegranateFromServer();
});

minusPomegranate.addEventListener("click", function(){
    if (countPomegranate>0){
        countPomegranate--;
        displayPomegranate.textContent = countPomegranate;
        modalRemoveFruit.style.display = "block";
        removeModalFruitRemoved();
        displayNumberOfFruitsInShoppingCart();
        window.localStorage.setItem("pomegranate", Number(countPomegranate));
        window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
    }
});


//serch for fruit in searchbar
function searchFruit(){
    let input = document.getElementById("userinput").value;
    input = input.toLowerCase();
    const fruitText = document.querySelectorAll(".fruitText");
    const fruitCards = document.querySelectorAll(".item");
    const noSearchResult = document.getElementById("containerNoSearchResult");
    let counter = 0;
    for (i=0; i<fruitCards.length; i++){ 
        if (!fruitText[i].textContent.toLowerCase().includes(input)) {
            fruitCards[i].style.display= "none";
        }
        else {
            fruitCards[i].style.display= "list-item";
            counter++;  
        }
    }
    if (counter===0){
        noSearchResult.style.display= "flex"; 
    }
    else {
        noSearchResult.style.display= "none"
    }
}


//display number of fruits in shopping cart as a number next to the shopping cart logo
function displayNumberOfFruitsInShoppingCart(){
    const totalNumberOfFruits = countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate;
    const digitDisplayingNumberOfFruits = document.getElementById("textdigitNumberOfFruits");
    digitDisplayingNumberOfFruits.textContent = totalNumberOfFruits;
    const containerNumberOfFruits = document.getElementById("containerNumberOfFruits");
    if (totalNumberOfFruits > 0){
        containerNumberOfFruits.style.display = "block";
    }
    else {
        containerNumberOfFruits.style.display = "none";
    }
}


//remember number of fruits and display it on first page when page reload/reopen
window.addEventListener("DOMContentLoaded", function(){
    const redAppleNumber = Number(window.localStorage.getItem("redApple"));
    const greenAppleNumber = Number(window.localStorage.getItem("greenApple"));
    const orangeNumber = Number(window.localStorage.getItem("orange"));
    const bananaNumber = Number(window.localStorage.getItem("banana"));
    const grapesNumber = Number(window.localStorage.getItem("grapes"));
    const honeydewMelonNumber = Number(window.localStorage.getItem("honeydewMelon"));
    const watermelonNumber = Number(window.localStorage.getItem("watermelon"));
    const lemonNumber = Number(window.localStorage.getItem("lemon"));
    const mangoNumber = Number(window.localStorage.getItem("mango"));
    const pomegranateNumber = Number(window.localStorage.getItem("pomegranate"));
    displayRedApple.textContent = redAppleNumber;
    displayGreenApple.textContent = greenAppleNumber;
    displayOrange.textContent = orangeNumber;
    displayBanana.textContent = bananaNumber;
    displayGrapes.textContent = grapesNumber;
    displayHoneydewMelon.textContent = honeydewMelonNumber;
    displayWatermelon.textContent = watermelonNumber;
    displayLemon.textContent = lemonNumber;
    displayMango.textContent = mangoNumber;
    displayPomegranate.textContent = pomegranateNumber;
    countRedApple = redAppleNumber;
    countGreenApple = greenAppleNumber;
    countOrange = orangeNumber;
    countBanana = bananaNumber;
    countGrapes = grapesNumber;
    countHoneydewMelon = honeydewMelonNumber;
    countWatermelon = watermelonNumber;
    countLemon = lemonNumber;
    countMango = mangoNumber; 
    countPomegranate = pomegranateNumber;
    displayNumberOfFruitsInShoppingCart();
});


//display total number of fruits in checkout
function displayTotalNumberOfFruitsInCheckout(){
    const totalFruits = Number(window.localStorage.getItem("totalNumberOfFruits"));
    if (totalFruits !== 0){
        document.getElementById("totalNumberOfFruits").textContent = totalFruits; 
    }
    else if (totalFruits == 0){
        document.getElementById("totalNumberOfFruits").textContent = 0;
    }
}


//display item added to shopping cart, the price and amount in checkout
function displayRedAppleAddedToShoppingCartInCheckout(){
    let numberOfRedApplesInCartForCard = Number(window.localStorage.getItem("redApple"));
    const displayRedAppleCard = document.getElementById("redAppleCard");
    if (numberOfRedApplesInCartForCard > 0){
        document.getElementById("countRedAppleInCheckout").textContent = numberOfRedApplesInCartForCard;
        displayRedAppleCard.style.display = "flex";
    }
    else if (numberOfRedApplesInCartForCard == 0){
        displayRedAppleCard.style.display = "none";
    }
}

function displayGreenAppleAddedToShoppingCartInCheckout(){
    let numberOfGreenApplesInCartForCard = Number(window.localStorage.getItem("greenApple"));
    const displayGreenAppleCard = document.getElementById("greenAppleCard");
    if (numberOfGreenApplesInCartForCard > 0){
        document.getElementById("countGreenAppleInCheckout").textContent = numberOfGreenApplesInCartForCard;
        displayGreenAppleCard.style.display = "flex";
    }
    else if (numberOfGreenApplesInCartForCard == 0){
        displayGreenAppleCard.style.display = "none";
    }
}

function displayOrangeAddedToShoppingCartInCheckout(){
    let numberOfOrangeInCartForCard = Number(window.localStorage.getItem("orange"));
    const displayOrangeCard = document.getElementById("orangeCard");
    if (numberOfOrangeInCartForCard > 0){
        document.getElementById("countOrangeInCheckout").textContent = numberOfOrangeInCartForCard;
        displayOrangeCard.style.display = "flex";
    }
    else if (numberOfOrangeInCartForCard == 0){
        displayOrangeCard.style.display = "none";
    }
}

function displayBananaAddedToShoppingCartInCheckout(){
    let numberOfBananaInCartForCard = Number(window.localStorage.getItem("banana"));
    const displayBananaCard = document.getElementById("bananaCard");
    if (numberOfBananaInCartForCard > 0){
        document.getElementById("countBananaInCheckout").textContent = numberOfBananaInCartForCard;
        displayBananaCard.style.display = "flex";
    }
    else if (numberOfBananaInCartForCard == 0){
        displayBananaCard.style.display = "none";
    }
}

function displayGrapesAddedToShoppingCartInCheckout(){
    let numberOfGrapesInCartForCard = Number(window.localStorage.getItem("grapes"));
    const displayGrapesCard = document.getElementById("grapesCard");
    if (numberOfGrapesInCartForCard > 0){
        document.getElementById("countGrapesInCheckout").textContent = numberOfGrapesInCartForCard;
        displayGrapesCard.style.display = "flex";
    }
    else if (numberOfGrapesInCartForCard == 0){
        displayGrapesCard.style.display = "none";
    }
}

function displayHoneydewMelonAddedToShoppingCartInCheckout(){
    let numberOfHoneydewMelonInCartForCard = Number(window.localStorage.getItem("honeydewMelon"));
    const displayHoneydewMelonCard = document.getElementById("honeydewMelonCard");
    if (numberOfHoneydewMelonInCartForCard > 0){
        document.getElementById("countHoneydewMelonInCheckout").textContent = numberOfHoneydewMelonInCartForCard;
        displayHoneydewMelonCard.style.display = "flex";
    }
    else if (numberOfHoneydewMelonInCartForCard == 0){
        displayHoneydewMelonCard.style.display = "none";
    }
}

function displayWatermelonAddedToShoppingCartInCheckout(){
    let numberOfWatermelonInCartForCard = Number(window.localStorage.getItem("watermelon"));
    const displayWatermelonCard = document.getElementById("watermelonCard");
    if (numberOfWatermelonInCartForCard > 0){
        document.getElementById("countWatermelonInCheckout").textContent = numberOfWatermelonInCartForCard;
        displayWatermelonCard.style.display = "flex";
    }
    else if (numberOfWatermelonInCartForCard == 0){
        displayWatermelonCard.style.display = "none";
    }
}

function displayLemonAddedToShoppingCartInCheckout(){
    let numberOfLemonInCartForCard = Number(window.localStorage.getItem("lemon"));
    const displayLemonCard = document.getElementById("lemonCard");
    if (numberOfLemonInCartForCard > 0){
        document.getElementById("countLemonInCheckout").textContent = numberOfLemonInCartForCard;
        displayLemonCard.style.display = "flex";
    }
    else if (numberOfLemonInCartForCard == 0){
        displayLemonCard.style.display = "none";
    }
}

function displayMangoAddedToShoppingCartInCheckout(){
    let numberOfMangoInCartForCard = Number(window.localStorage.getItem("mango"));
    const displayMangoCard = document.getElementById("mangoCard");
    if (numberOfMangoInCartForCard > 0){
        document.getElementById("countMangoInCheckout").textContent = numberOfMangoInCartForCard;
        displayMangoCard.style.display = "flex";
    }
    else if (numberOfMangoInCartForCard == 0){
        displayMangoCard.style.display = "none";
    }
}

function displayPomegranateAddedToShoppingCartInCheckout(){
    let numberOfPomegranateInCartForCard = Number(window.localStorage.getItem("pomegranate"));
    const displayPomegranateCard = document.getElementById("pomegranateCard");
    if (numberOfPomegranateInCartForCard > 0){
        document.getElementById("countPomegranateInCheckout").textContent = numberOfPomegranateInCartForCard;
        displayPomegranateCard.style.display = "flex";
    }
    else if (numberOfPomegranateInCartForCard == 0){
        displayPomegranateCard.style.display = "none";
    }
}


//change amount of a fruit added to shopping cart in checkout
function fetchAvailableAmountRedApplesFromServerInCheckOut(){
    fetch("http://localhost:3000/addfruitincheckout", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            fruit: "red apple",
            amount: Number(window.localStorage.getItem("redApple"))
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data === "success"){
            const displayRedAppleInCheckout = document.getElementById("countRedAppleInCheckout");
            let countRedAppleInCheckout = Number(window.localStorage.getItem("redApple"));
            countRedAppleInCheckout++;
            displayRedAppleInCheckout.textContent = countRedAppleInCheckout;
            window.localStorage.setItem("redApple", Number(countRedAppleInCheckout));
            window.localStorage.setItem("totalNumberOfFruits", countRedAppleInCheckout + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));
            displayTotalNumberOfFruitsInCheckout();
        }
        else{
           alert("Out of stock")
        }
    })
    .catch(err => console.log("error"))
}

function fetchAvailableAmountGreenApplesFromServerInCheckOut(){
    fetch("http://localhost:3000/addfruitincheckout", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            fruit: "green apple",
            amount: Number(window.localStorage.getItem("greenApple"))
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data === "success"){
            const displayGreenAppleInCheckout = document.getElementById("countGreenAppleInCheckout");
            let countGreenAppleInCheckout = Number(window.localStorage.getItem("greenApple"));
            countGreenAppleInCheckout++;
            displayGreenAppleInCheckout.textContent = countGreenAppleInCheckout;
            window.localStorage.setItem("greenApple", Number(countGreenAppleInCheckout));
            window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + countGreenAppleInCheckout + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));    
            displayTotalNumberOfFruitsInCheckout();
        }
        else{
           alert("Out of stock")
        }
    })
    .catch(err => console.log("error"))
}

function fetchAvailableAmountOrangesFromServerInCheckOut(){
    fetch("http://localhost:3000/addfruitincheckout", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            fruit: "orange",
            amount: Number(window.localStorage.getItem("orange"))
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data === "success"){
            const displayOrangeInCheckout = document.getElementById("countOrangeInCheckout");
            let countOrangeInCheckout = Number(window.localStorage.getItem("orange"));
            countOrangeInCheckout++;
            displayOrangeInCheckout.textContent = countOrangeInCheckout;
            window.localStorage.setItem("orange", Number(countOrangeInCheckout));
            window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + countOrangeInCheckout + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));    
            displayTotalNumberOfFruitsInCheckout();
        }
        else{
           alert("Out of stock")
        }
    })
    .catch(err => console.log("error"))
}

function fetchAvailableAmountBananasFromServerInCheckOut(){
    fetch("http://localhost:3000/addfruitincheckout", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            fruit: "banana",
            amount: Number(window.localStorage.getItem("banana"))
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data === "success"){
            const displayBananaInCheckout = document.getElementById("countBananaInCheckout");
            let countBananaInCheckout = Number(window.localStorage.getItem("banana"));
            countBananaInCheckout++;
            displayBananaInCheckout.textContent = countBananaInCheckout;
            window.localStorage.setItem("banana", Number(countBananaInCheckout));
            window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + countBananaInCheckout + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));    
            displayTotalNumberOfFruitsInCheckout();
        }
        else{
           alert("Out of stock")
        }
    })
    .catch(err => console.log("error"))
}

function fetchAvailableAmountGrapesFromServerInCheckOut(){
    fetch("http://localhost:3000/addfruitincheckout", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            fruit: "grapes",
            amount: Number(window.localStorage.getItem("grapes"))
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data === "success"){
            const displayGrapesInCheckout = document.getElementById("countGrapesInCheckout");
            let countGrapesInCheckout = Number(window.localStorage.getItem("grapes"));
            countGrapesInCheckout++;
            displayGrapesInCheckout.textContent = countGrapesInCheckout;
            window.localStorage.setItem("grapes", Number(countGrapesInCheckout));
            window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + countGrapesInCheckout + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));    
            displayTotalNumberOfFruitsInCheckout();
        }
        else{
           alert("Out of stock")
        }
    })
    .catch(err => console.log("error"))
}

function fetchAvailableAmountHoneydewMelonsFromServerInCheckOut(){
    fetch("http://localhost:3000/addfruitincheckout", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            fruit: "honeydew melon",
            amount: Number(window.localStorage.getItem("honeydewMelon"))
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data === "success"){
            const displayHoneydewMelonInCheckout = document.getElementById("countHoneydewMelonInCheckout");
            let countHoneydewMelonInCheckout = Number(window.localStorage.getItem("honeydewMelon"));
            countHoneydewMelonInCheckout++;
            displayHoneydewMelonInCheckout.textContent = countHoneydewMelonInCheckout;
            window.localStorage.setItem("honeydewMelon", Number(countHoneydewMelonInCheckout));
            window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + countHoneydewMelonInCheckout + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));    
            displayTotalNumberOfFruitsInCheckout();
        }
        else{
           alert("Out of stock")
        }
    })
    .catch(err => console.log("error"))
}

function fetchAvailableAmountWatermelonsFromServerInCheckOut(){
    fetch("http://localhost:3000/addfruitincheckout", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            fruit: "watermelon",
            amount: Number(window.localStorage.getItem("watermelon"))
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data === "success"){
            const displayWatermelonInCheckout = document.getElementById("countWatermelonInCheckout");
            let countWatermelonInCheckout = Number(window.localStorage.getItem("watermelon"));
            countWatermelonInCheckout++;
            displayWatermelonInCheckout.textContent = countWatermelonInCheckout;
            window.localStorage.setItem("watermelon", Number(countWatermelonInCheckout));
            window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + countWatermelonInCheckout + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));    
            displayTotalNumberOfFruitsInCheckout();
        }
        else{
           alert("Out of stock")
        }
    })
    .catch(err => console.log("error"))
}

function fetchAvailableAmountLemonsFromServerInCheckOut(){
    fetch("http://localhost:3000/addfruitincheckout", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            fruit: "lemon",
            amount: Number(window.localStorage.getItem("lemon"))
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data === "success"){
            const displayLemonInCheckout = document.getElementById("countLemonInCheckout");
            let countLemonInCheckout = Number(window.localStorage.getItem("lemon"));
            countLemonInCheckout++;
            displayLemonInCheckout.textContent = countLemonInCheckout;
            window.localStorage.setItem("lemon", Number(countLemonInCheckout));
            window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + countLemonInCheckout + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));    
            displayTotalNumberOfFruitsInCheckout();
        }
        else{
           alert("Out of stock")
        }
    })
    .catch(err => console.log("error"))
}

function fetchAvailableAmountMangosFromServerInCheckOut(){
    fetch("http://localhost:3000/addfruitincheckout", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            fruit: "mango",
            amount: Number(window.localStorage.getItem("mango"))
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data === "success"){
            const displayMangoInCheckout = document.getElementById("countMangoInCheckout");
            let countMangoInCheckout = Number(window.localStorage.getItem("mango"));
            countMangoInCheckout++;
            displayMangoInCheckout.textContent = countMangoInCheckout;
            window.localStorage.setItem("mango", Number(countMangoInCheckout));
            window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + countMangoInCheckout + Number(window.localStorage.getItem("pomegranate")));    
            displayTotalNumberOfFruitsInCheckout();
        }
        else{
           alert("Out of stock")
        }
    })
    .catch(err => console.log("error"))
}

function fetchAvailableAmountPomegranatesFromServerInCheckOut(){
    fetch("http://localhost:3000/addfruitincheckout", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            fruit: "pomegranate",
            amount: Number(window.localStorage.getItem("pomegranate"))
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data === "success"){
            const displayPomegranateInCheckout = document.getElementById("countPomegranateInCheckout");
            let countPomegranateInCheckout = Number(window.localStorage.getItem("pomegranate"));
            countPomegranateInCheckout++;
            displayPomegranateInCheckout.textContent = countPomegranateInCheckout;
            window.localStorage.setItem("pomegranate", Number(countPomegranateInCheckout));
            window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + countPomegranateInCheckout);    
            displayTotalNumberOfFruitsInCheckout();
        }
        else{
           alert("Out of stock")
        }
    })
    .catch(err => console.log("error"))
}

//red apple
function plusRedAppleInCheckout(){
    fetchAvailableAmountRedApplesFromServerInCheckOut();
    fetchPriceOnCheckout();
}

function minusRedAppleInCheckout(){
    const displayRedAppleInCheckout = document.getElementById("countRedAppleInCheckout");
    let countRedAppleInCheckout = Number(window.localStorage.getItem("redApple"));
    if (countRedAppleInCheckout > 0){
        countRedAppleInCheckout--;
        displayRedAppleInCheckout.textContent = countRedAppleInCheckout;
        window.localStorage.setItem("redApple", Number(countRedAppleInCheckout));
        window.localStorage.setItem("totalNumberOfFruits", countRedAppleInCheckout + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));        
        displayTotalNumberOfFruitsInCheckout();
        fetchPriceOnCheckout();
    }
}

//green apple
function plusGreenAppleInCheckout(){
    fetchAvailableAmountGreenApplesFromServerInCheckOut();
    fetchPriceOnCheckout();
}

function minusGreenAppleInCheckout(){
    const displayGreenAppleInCheckout = document.getElementById("countGreenAppleInCheckout");
    let countGreenAppleInCheckout = Number(window.localStorage.getItem("greenApple"));
    if (countGreenAppleInCheckout > 0){
        countGreenAppleInCheckout--;
        displayGreenAppleInCheckout.textContent = countGreenAppleInCheckout;
        window.localStorage.setItem("greenApple", Number(countGreenAppleInCheckout));
        window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + countGreenAppleInCheckout + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));        
        displayTotalNumberOfFruitsInCheckout();
        fetchPriceOnCheckout();
    }
}

//orange
function plusOrangeInCheckout(){
    fetchAvailableAmountOrangesFromServerInCheckOut();
    fetchPriceOnCheckout();
}

function minusOrangeInCheckout(){
    const displayOrangeInCheckout = document.getElementById("countOrangeInCheckout");
    let countOrangeInCheckout = Number(window.localStorage.getItem("orange"));
    if (countOrangeInCheckout > 0){
        countOrangeInCheckout--;
        displayOrangeInCheckout.textContent = countOrangeInCheckout;
        window.localStorage.setItem("orange", Number(countOrangeInCheckout));
        window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + countOrangeInCheckout + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));        
        displayTotalNumberOfFruitsInCheckout();
        fetchPriceOnCheckout();
    }
}

//banana
function plusBananaInCheckout(){
    fetchAvailableAmountBananasFromServerInCheckOut();
    fetchPriceOnCheckout();
}

function minusBananaInCheckout(){
    const displayBananaInCheckout = document.getElementById("countBananaInCheckout");
    let countBananaInCheckout = Number(window.localStorage.getItem("banana"));
    if (countBananaInCheckout > 0){
        countBananaInCheckout--;
        displayBananaInCheckout.textContent = countBananaInCheckout;
        window.localStorage.setItem("banana", Number(countBananaInCheckout));
        window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + countBananaInCheckout + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));        
        displayTotalNumberOfFruitsInCheckout();
        fetchPriceOnCheckout();
    }
}

//grapes
function plusGrapesInCheckout(){
    fetchAvailableAmountGrapesFromServerInCheckOut();
    fetchPriceOnCheckout();
}

function minusGrapesInCheckout(){
    const displayGrapesInCheckout = document.getElementById("countGrapesInCheckout");
    let countGrapesInCheckout = Number(window.localStorage.getItem("grapes"));
    if (countGrapesInCheckout > 0){
        countGrapesInCheckout--;
        displayGrapesInCheckout.textContent = countGrapesInCheckout;
        window.localStorage.setItem("grapes", Number(countGrapesInCheckout));
        window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + countGrapesInCheckout + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));        
        displayTotalNumberOfFruitsInCheckout();
        fetchPriceOnCheckout();
    }
}

//honeydew melon
function plusHoneydewMelonInCheckout(){
    fetchAvailableAmountHoneydewMelonsFromServerInCheckOut();
    fetchPriceOnCheckout();
}

function minusHoneydewMelonInCheckout(){
    const displayHoneydewMelonInCheckout = document.getElementById("countHoneydewMelonInCheckout");
    let countHoneydewMelonInCheckout = Number(window.localStorage.getItem("honeydewMelon"));
    if (countHoneydewMelonInCheckout > 0){
        countHoneydewMelonInCheckout--;
        displayHoneydewMelonInCheckout.textContent = countHoneydewMelonInCheckout;
        window.localStorage.setItem("honeydewMelon", Number(countHoneydewMelonInCheckout));
        window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + countHoneydewMelonInCheckout + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));        
        displayTotalNumberOfFruitsInCheckout();
        fetchPriceOnCheckout();
    }
}

//watermelon
function plusWatermelonInCheckout(){
    fetchAvailableAmountWatermelonsFromServerInCheckOut();
    fetchPriceOnCheckout();
}

function minusWatermelonInCheckout(){
    const displayWatermelonInCheckout = document.getElementById("countWatermelonInCheckout");
    let countWatermelonInCheckout = Number(window.localStorage.getItem("watermelon"));
    if (countWatermelonInCheckout > 0){
        countWatermelonInCheckout--;
        displayWatermelonInCheckout.textContent = countWatermelonInCheckout;
        window.localStorage.setItem("watermelon", Number(countWatermelonInCheckout));
        window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + countWatermelonInCheckout + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));        
        displayTotalNumberOfFruitsInCheckout();
        fetchPriceOnCheckout();
    }
}

//lemon
function plusLemonInCheckout(){
    fetchAvailableAmountLemonsFromServerInCheckOut();
    fetchPriceOnCheckout();
}

function minusLemonInCheckout(){
    const displayLemonInCheckout = document.getElementById("countLemonInCheckout");
    let countLemonInCheckout = Number(window.localStorage.getItem("lemon"));
    if (countLemonInCheckout > 0){
        countLemonInCheckout--;
        displayLemonInCheckout.textContent = countLemonInCheckout;
        window.localStorage.setItem("lemon", Number(countLemonInCheckout));
        window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + countLemonInCheckout + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));        
        displayTotalNumberOfFruitsInCheckout();
        fetchPriceOnCheckout();
    }
}

//mango
function plusMangoInCheckout(){
    fetchAvailableAmountMangosFromServerInCheckOut();
    fetchPriceOnCheckout();
}

function minusMangoInCheckout(){
    const displayMangoInCheckout = document.getElementById("countMangoInCheckout");
    let countMangoInCheckout = Number(window.localStorage.getItem("mango"));
    if (countMangoInCheckout > 0){
        countMangoInCheckout--;
        displayMangoInCheckout.textContent = countMangoInCheckout;
        window.localStorage.setItem("mango", Number(countMangoInCheckout));
        window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + countMangoInCheckout + Number(window.localStorage.getItem("pomegranate")));        
        displayTotalNumberOfFruitsInCheckout();
        fetchPriceOnCheckout();
    }
}

//pomegranate
function plusPomegranateInCheckout(){
    fetchAvailableAmountPomegranatesFromServerInCheckOut();
    fetchPriceOnCheckout();
}

function minusPomegranateInCheckout(){
    const displayPomegranateInCheckout = document.getElementById("countPomegranateInCheckout");
    let countPomegranateInCheckout = Number(window.localStorage.getItem("pomegranate"));
    if (countPomegranateInCheckout > 0){
        countPomegranateInCheckout--;
        displayPomegranateInCheckout.textContent = countPomegranateInCheckout;
        window.localStorage.setItem("pomegranate", Number(countPomegranateInCheckout));
        window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + countPomegranateInCheckout);        
        displayTotalNumberOfFruitsInCheckout();
        fetchPriceOnCheckout();
    }
}


//fetch fruit price, calculate and display total price in checkout
function fetchPriceOnCheckout(){
    let fruitData = {
        fruits: [
            {
                fruit: "red apple",
                amount: Number(window.localStorage.getItem("redApple"))
            },
            {
                fruit: "green apple",
                amount: Number(window.localStorage.getItem("greenApple"))
            },
            {
                fruit: "orange",
                amount: Number(window.localStorage.getItem("orange"))
            },
            {
                fruit: "banana",
                amount: Number(window.localStorage.getItem("banana"))
            },
            {
                fruit: "grapes",
                amount: Number(window.localStorage.getItem("grapes"))
            },
            {
                fruit: "honeydew melon",
                amount: Number(window.localStorage.getItem("honeydew melon"))
            },
            {
                fruit: "watermelon",
                amount: Number(window.localStorage.getItem("watermelon"))
            },
            {
                fruit: "lemon",
                amount: Number(window.localStorage.getItem("lemon"))
            },
            {
                fruit: "mango",
                amount: Number(window.localStorage.getItem("mango"))
            },
            {
                fruit: "pomegranate",
                amount: Number(window.localStorage.getItem("pomegranate"))
            }
        ]
    }
    fetch("http://localhost:3000/price", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(fruitData)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("priceRedAppleInCheckout").textContent = data[0].price;
        document.getElementById("priceGreenAppleInCheckout").textContent = data[1].price;
        document.getElementById("priceOrangeInCheckout").textContent = data[2].price;
        document.getElementById("priceBananaInCheckout").textContent = data[3].price;
        document.getElementById("priceGrapesInCheckout").textContent = data[4].price;
        document.getElementById("priceHoneydewMelonInCheckout").textContent = data[5].price;
        document.getElementById("priceWatermelonInCheckout").textContent = data[6].price;
        document.getElementById("priceLemonInCheckout").textContent = data[7].price;
        document.getElementById("priceMangoInCheckout").textContent = data[8].price;
        document.getElementById("pricePomegranateInCheckout").textContent = data[9].price;
        displayRedAppleAddedToShoppingCartInCheckout();
        displayGreenAppleAddedToShoppingCartInCheckout();
        displayOrangeAddedToShoppingCartInCheckout();
        displayBananaAddedToShoppingCartInCheckout();
        displayGrapesAddedToShoppingCartInCheckout();
        displayHoneydewMelonAddedToShoppingCartInCheckout();
        displayWatermelonAddedToShoppingCartInCheckout();
        displayLemonAddedToShoppingCartInCheckout();
        displayMangoAddedToShoppingCartInCheckout();
        displayPomegranateAddedToShoppingCartInCheckout();
        const priceRedAppleInNumber = data[0].price;
        const priceGreenAppleInNumber = data[1].price;
        const priceOrangeInNumber = data[2].price;
        const priceBananaInNumber = data[3].price;
        const priceGrapesInNumber = data[4].price;
        const priceHoneydewMelonInNumber = data[5].price;
        const priceWatermelonInNumber = data[6].price;
        const priceLemonInNumber = data[7].price;
        const priceMangoInNumber = data[8].price;
        const pricePomegranateInNumber = data[9].price;
        let numberOfRedApplesInCart = Number(window.localStorage.getItem("redApple"));
        let numberOfGreenApplesInCart = Number(window.localStorage.getItem("greenApple"));
        let numberOfOrangesInCart = Number(window.localStorage.getItem("orange"));
        let numberOfBananasInCart = Number(window.localStorage.getItem("banana"));
        let numberOfGrapesInCart = Number(window.localStorage.getItem("grapes"));
        let numberOfHoneydewMelonsInCart = Number(window.localStorage.getItem("honeydewMelon"));
        let numberOfWatermelonsInCart = Number(window.localStorage.getItem("watermelon"));
        let numberOfLemonsInCart = Number(window.localStorage.getItem("lemon"));
        let numberOfMangosInCart = Number(window.localStorage.getItem("mango"));
        let numberOfPomegranatesInCart = Number(window.localStorage.getItem("pomegranate"));
        const totalCost = ((numberOfRedApplesInCart * priceRedAppleInNumber) + (numberOfGreenApplesInCart * priceGreenAppleInNumber) + (numberOfOrangesInCart * priceOrangeInNumber) + (numberOfBananasInCart * priceBananaInNumber) + (numberOfGrapesInCart * priceGrapesInNumber) + (numberOfHoneydewMelonsInCart * priceHoneydewMelonInNumber) + (numberOfWatermelonsInCart * priceWatermelonInNumber) + (numberOfLemonsInCart * priceLemonInNumber) + (numberOfMangosInCart * priceMangoInNumber) + (numberOfPomegranatesInCart * pricePomegranateInNumber));
        document.getElementById("totalCost").textContent = totalCost;
    })
    .catch(err => console.log("error"))
}


//check available amount when checking out
function checkoutStatus(){
    fetchAvailableAmountFromServer();
}

function fetchAvailableAmountFromServer(){
    let fruitData = {
        fruits: [
            {
                fruit: "red apple",
                amount: Number(window.localStorage.getItem("redApple"))
            },
            {
                fruit: "green apple",
                amount: Number(window.localStorage.getItem("greenApple"))
            },
            {
                fruit: "orange",
                amount: Number(window.localStorage.getItem("orange"))
            },
            {
                fruit: "banana",
                amount: Number(window.localStorage.getItem("banana"))
            },
            {
                fruit: "grapes",
                amount: Number(window.localStorage.getItem("grapes"))
            },
            {
                fruit: "honeydew melon",
                amount: Number(window.localStorage.getItem("honeydewMelon"))
            },
            {
                fruit: "watermelon",
                amount: Number(window.localStorage.getItem("watermelon"))
            },
            {
                fruit: "lemon",
                amount: Number(window.localStorage.getItem("lemon"))
            },
            {
                fruit: "mango",
                amount: Number(window.localStorage.getItem("mango"))
            },
            {
                fruit: "pomegranate",
                amount: Number(window.localStorage.getItem("pomegranate"))
            }
        ]
    }
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
    .catch(err => console.log("error"))
}