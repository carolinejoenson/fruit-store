//fruit prices
const allFruitsInStock = [
    {
        fruit: "Red apple",
        price: "1"
    },
    {   
        fruit: "Green apple",
        price: "1"
    },
    {   
        fruit: "Orange",
        price: "1.50"
    },
    {   
        fruit: "Banana",
        price: "1"
    },
    {   
        fruit: "Grapes",
        price: "2"
    },
    {   
        fruit: "Honeydew melon",
        price: "3"
    },
    {   
        fruit: "Watermelon",
        price: "3.50"
    },
    {   
        fruit: "Lemon",
        price: "0.50"
    },
    {   
        fruit: "Mango",
        price: "2.50"
    },
    {   
        fruit: "Pomegranate",
        price: "4"
    }
];


//display fruit price on first page
document.getElementById("priceRedApple").textContent = allFruitsInStock[0].price;
document.getElementById("priceGreenApple").textContent = allFruitsInStock[1].price;
document.getElementById("priceOrange").textContent = allFruitsInStock[2].price;
document.getElementById("priceBanana").textContent = allFruitsInStock[3].price;
document.getElementById("priceGrapes").textContent = allFruitsInStock[4].price;
document.getElementById("priceHoneydewMelon").textContent = allFruitsInStock[5].price;
document.getElementById("priceWatermelon").textContent = allFruitsInStock[6].price;
document.getElementById("priceLemon").textContent = allFruitsInStock[7].price;
document.getElementById("priceMango").textContent = allFruitsInStock[8].price;
document.getElementById("pricePomegranate").textContent = allFruitsInStock[9].price;


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


//change amount of a fruit and store the number in localStorage, display modal
//red apple
const minusRedApple = document.getElementById("minusOneRedApple");
const plusRedApple = document.getElementById("plusOneRedApple");
const displayRedApple = document.getElementById("countRedApple");
let countRedApple = 0;
displayRedApple.textContent = countRedApple;

plusRedApple.addEventListener("click", function(){
    countRedApple++;
    displayRedApple.textContent = countRedApple;
    modalAddFruit.style.display = "block";
    removeModalFruitAdded();
    displayNumberOfFruitsInShoppingCart();
    window.localStorage.setItem("redApple", Number(countRedApple));
    window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
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
    countGreenApple++;
    displayGreenApple.textContent = countGreenApple;
    modalAddFruit.style.display = "block";
    removeModalFruitAdded();
    displayNumberOfFruitsInShoppingCart();
    window.localStorage.setItem("greenApple", Number(countGreenApple));
    window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
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
    countOrange++;
    displayOrange.textContent = countOrange;
    modalAddFruit.style.display = "block";
    removeModalFruitAdded();
    displayNumberOfFruitsInShoppingCart();
    window.localStorage.setItem("orange", Number(countOrange));
    window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
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
    countBanana++;
    displayBanana.textContent = countBanana;
    modalAddFruit.style.display = "block";
    removeModalFruitAdded();
    displayNumberOfFruitsInShoppingCart();
    window.localStorage.setItem("banana", Number(countBanana));
    window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
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
    countGrapes++;
    displayGrapes.textContent = countGrapes;
    modalAddFruit.style.display = "block";
    removeModalFruitAdded();
    displayNumberOfFruitsInShoppingCart();
    window.localStorage.setItem("grapes", Number(countGrapes));
    window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
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
    countHoneydewMelon++;
    displayHoneydewMelon.textContent = countHoneydewMelon;
    modalAddFruit.style.display = "block";
    removeModalFruitAdded();
    displayNumberOfFruitsInShoppingCart();
    window.localStorage.setItem("honeydewMelon", Number(countHoneydewMelon));
    window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
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
    countWatermelon++;
    displayWatermelon.textContent = countWatermelon;
    modalAddFruit.style.display = "block";
    removeModalFruitAdded();
    displayNumberOfFruitsInShoppingCart();
    window.localStorage.setItem("watermelon", Number(countWatermelon));
    window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
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
    countLemon++;
    displayLemon.textContent = countLemon;
    modalAddFruit.style.display = "block";
    removeModalFruitAdded();
    displayNumberOfFruitsInShoppingCart();
    window.localStorage.setItem("lemon", Number(countLemon));
    window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
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
    countMango++;
    displayMango.textContent = countMango;
    modalAddFruit.style.display = "block";
    removeModalFruitAdded();
    displayNumberOfFruitsInShoppingCart();
    window.localStorage.setItem("mango", Number(countMango));
    window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
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
    countPomegranate++;
    displayPomegranate.textContent = countPomegranate;
    modalAddFruit.style.display = "block";
    removeModalFruitAdded();
    displayNumberOfFruitsInShoppingCart();
    window.localStorage.setItem("pomegranate", Number(countPomegranate));
    window.localStorage.setItem("totalNumberOfFruits", Number(countRedApple + countGreenApple + countOrange + countBanana + countGrapes + countHoneydewMelon + countWatermelon + countLemon + countMango + countPomegranate));
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


//display item added to shopping cart and its' price and amount in checkout
function displayRedAppleAddedToShoppingCartInCheckout(){
    let numberOfRedApplesInCartForCard = Number(window.localStorage.getItem("redApple"));
    const priceRedAppleInNumberForCard = Number(allFruitsInStock[0].price);
    const displayRedAppleCard = document.getElementById("redAppleCard");
    if (numberOfRedApplesInCartForCard > 0){
        document.getElementById("countRedAppleInCheckout").textContent = numberOfRedApplesInCartForCard;
        document.getElementById("priceRedAppleInCheckout").textContent = priceRedAppleInNumberForCard;
        displayRedAppleCard.style.display = "flex";
    }
    else if (numberOfRedApplesInCartForCard == 0){
        displayRedAppleCard.style.display = "none";
    }
}

function displayGreenAppleAddedToShoppingCartInCheckout(){
    let numberOfGreenApplesInCartForCard = Number(window.localStorage.getItem("greenApple"));
    const priceGreenAppleInNumberForCard = Number(allFruitsInStock[1].price);
    const displayGreenAppleCard = document.getElementById("greenAppleCard");
    if (numberOfGreenApplesInCartForCard > 0){
        document.getElementById("countGreenAppleInCheckout").textContent = numberOfGreenApplesInCartForCard;
        document.getElementById("priceGreenAppleInCheckout").textContent = priceGreenAppleInNumberForCard;
        displayGreenAppleCard.style.display = "flex";
    }
    else if (numberOfGreenApplesInCartForCard == 0){
        displayGreenAppleCard.style.display = "none";
    }
}

function displayOrangeAddedToShoppingCartInCheckout(){
    let numberOfOrangeInCartForCard = Number(window.localStorage.getItem("orange"));
    const priceOrangeInNumberForCard = Number(allFruitsInStock[2].price);
    const displayOrangeCard = document.getElementById("orangeCard");
    if (numberOfOrangeInCartForCard > 0){
        document.getElementById("countOrangeInCheckout").textContent = numberOfOrangeInCartForCard;
        document.getElementById("priceOrangeInCheckout").textContent = priceOrangeInNumberForCard;
        displayOrangeCard.style.display = "flex";
    }
    else if (numberOfOrangeInCartForCard == 0){
        displayOrangeCard.style.display = "none";
    }
}

function displayBananaAddedToShoppingCartInCheckout(){
    let numberOfBananaInCartForCard = Number(window.localStorage.getItem("banana"));
    const priceBananaInNumberForCard = Number(allFruitsInStock[3].price);
    const displayBananaCard = document.getElementById("bananaCard");
    if (numberOfBananaInCartForCard > 0){
        document.getElementById("countBananaInCheckout").textContent = numberOfBananaInCartForCard;
        document.getElementById("priceBananaInCheckout").textContent = priceBananaInNumberForCard;
        displayBananaCard.style.display = "flex";
    }
    else if (numberOfBananaInCartForCard == 0){
        displayBananaCard.style.display = "none";
    }
}

function displayGrapesAddedToShoppingCartInCheckout(){
    let numberOfGrapesInCartForCard = Number(window.localStorage.getItem("grapes"));
    const priceGrapesInNumberForCard = Number(allFruitsInStock[4].price);
    const displayGrapesCard = document.getElementById("grapesCard");
    if (numberOfGrapesInCartForCard > 0){
        document.getElementById("countGrapesInCheckout").textContent = numberOfGrapesInCartForCard;
        document.getElementById("priceGrapesInCheckout").textContent = priceGrapesInNumberForCard;
        displayGrapesCard.style.display = "flex";
    }
    else if (numberOfGrapesInCartForCard == 0){
        displayGrapesCard.style.display = "none";
    }
}

function displayHoneydewMelonAddedToShoppingCartInCheckout(){
    let numberOfHoneydewMelonInCartForCard = Number(window.localStorage.getItem("honeydewMelon"));
    const priceHoneydewMelonInNumberForCard = Number(allFruitsInStock[5].price);
    const displayHoneydewMelonCard = document.getElementById("honeydewMelonCard");
    if (numberOfHoneydewMelonInCartForCard > 0){
        document.getElementById("countHoneydewMelonInCheckout").textContent = numberOfHoneydewMelonInCartForCard;
        document.getElementById("priceHoneydewMelonInCheckout").textContent = priceHoneydewMelonInNumberForCard;
        displayHoneydewMelonCard.style.display = "flex";
    }
    else if (numberOfHoneydewMelonInCartForCard == 0){
        displayHoneydewMelonCard.style.display = "none";
    }
}

function displayWatermelonAddedToShoppingCartInCheckout(){
    let numberOfWatermelonInCartForCard = Number(window.localStorage.getItem("watermelon"));
    const priceWatermelonInNumberForCard = Number(allFruitsInStock[6].price);
    const displayWatermelonCard = document.getElementById("watermelonCard");
    if (numberOfWatermelonInCartForCard > 0){
        document.getElementById("countWatermelonInCheckout").textContent = numberOfWatermelonInCartForCard;
        document.getElementById("priceWatermelonInCheckout").textContent = priceWatermelonInNumberForCard;
        displayWatermelonCard.style.display = "flex";
    }
    else if (numberOfWatermelonInCartForCard == 0){
        displayWatermelonCard.style.display = "none";
    }
}

function displayLemonAddedToShoppingCartInCheckout(){
    let numberOfLemonInCartForCard = Number(window.localStorage.getItem("lemon"));
    const priceLemonInNumberForCard = Number(allFruitsInStock[7].price);
    const displayLemonCard = document.getElementById("lemonCard");
    if (numberOfLemonInCartForCard > 0){
        document.getElementById("countLemonInCheckout").textContent = numberOfLemonInCartForCard;
        document.getElementById("priceLemonInCheckout").textContent = priceLemonInNumberForCard;
        displayLemonCard.style.display = "flex";
    }
    else if (numberOfLemonInCartForCard == 0){
        displayLemonCard.style.display = "none";
    }
}

function displayMangoAddedToShoppingCartInCheckout(){
    let numberOfMangoInCartForCard = Number(window.localStorage.getItem("mango"));
    const priceMangoInNumberForCard = Number(allFruitsInStock[8].price);
    const displayMangoCard = document.getElementById("mangoCard");
    if (numberOfMangoInCartForCard > 0){
        document.getElementById("countMangoInCheckout").textContent = numberOfMangoInCartForCard;
        document.getElementById("priceMangoInCheckout").textContent = priceMangoInNumberForCard;
        displayMangoCard.style.display = "flex";
    }
    else if (numberOfMangoInCartForCard == 0){
        displayMangoCard.style.display = "none";
    }
}

function displayPomegranateAddedToShoppingCartInCheckout(){
    let numberOfPomegranateInCartForCard = Number(window.localStorage.getItem("pomegranate"));
    const pricePomegranateInNumberForCard = Number(allFruitsInStock[9].price);
    const displayPomegranateCard = document.getElementById("pomegranateCard");
    if (numberOfPomegranateInCartForCard > 0){
        document.getElementById("countPomegranateInCheckout").textContent = numberOfPomegranateInCartForCard;
        document.getElementById("pricePomegranateInCheckout").textContent = pricePomegranateInNumberForCard;
        displayPomegranateCard.style.display = "flex";
    }
    else if (numberOfPomegranateInCartForCard == 0){
        displayPomegranateCard.style.display = "none";
    }
}


//change amount of a fruit added to shopping cart in checkout
//red apple
function plusRedAppleInCheckout(){
    const displayRedAppleInCheckout = document.getElementById("countRedAppleInCheckout");
    let countRedAppleInCheckout = Number(window.localStorage.getItem("redApple"));
    countRedAppleInCheckout++;
    displayRedAppleInCheckout.textContent = countRedAppleInCheckout;
    window.localStorage.setItem("redApple", Number(countRedAppleInCheckout));
    window.localStorage.setItem("totalNumberOfFruits", countRedAppleInCheckout + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));
    displayTotalNumberOfFruitsInCheckout();
    displayTotalPriceInCheckout();
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
        displayTotalPriceInCheckout();
        removeRedAppleCardInCheckoutIfChangedToZero();
    }
}

function removeRedAppleCardInCheckoutIfChangedToZero(){
    let countRedAppleInCheckout = Number(window.localStorage.getItem("redApple"));
    const displayRedAppleCard = document.getElementById("redAppleCard");
    if (countRedAppleInCheckout == 0){
        displayRedAppleCard.style.display = "none";
    }
}

//green apple
function plusGreenAppleInCheckout(){
    const displayGreenAppleInCheckout = document.getElementById("countGreenAppleInCheckout");
    let countGreenAppleInCheckout = Number(window.localStorage.getItem("greenApple"));
    countGreenAppleInCheckout++;
    displayGreenAppleInCheckout.textContent = countGreenAppleInCheckout;
    window.localStorage.setItem("greenApple", Number(countGreenAppleInCheckout));
    window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + countGreenAppleInCheckout + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));    
    displayTotalNumberOfFruitsInCheckout();
    displayTotalPriceInCheckout();
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
        displayTotalPriceInCheckout();
        removeGreenAppleCardInCheckoutIfChangedToZero();
    }
}

function removeGreenAppleCardInCheckoutIfChangedToZero(){
    let countGreenAppleInCheckout = Number(window.localStorage.getItem("greenApple"));
    const displayGreenAppleCard = document.getElementById("greenAppleCard");
    if(countGreenAppleInCheckout == 0){
        displayGreenAppleCard.style.display = "none";
    }
}

//orange
function plusOrangeInCheckout(){
    const displayOrangeInCheckout = document.getElementById("countOrangeInCheckout");
    let countOrangeInCheckout = Number(window.localStorage.getItem("orange"));
    countOrangeInCheckout++;
    displayOrangeInCheckout.textContent = countOrangeInCheckout;
    window.localStorage.setItem("orange", Number(countOrangeInCheckout));
    window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + countOrangeInCheckout + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));    
    displayTotalNumberOfFruitsInCheckout();
    displayTotalPriceInCheckout();
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
        displayTotalPriceInCheckout();
        removeOrangeCardInCheckoutIfChangedToZero();
    }
}

function removeOrangeCardInCheckoutIfChangedToZero(){
    let countOrangeInCheckout = Number(window.localStorage.getItem("orange"));
    const displayOrangeCard = document.getElementById("orangeCard");
    if (countOrangeInCheckout == 0){
        displayOrangeCard.style.display = "none";
    }
}

//banana
function plusBananaInCheckout(){
    const displayBananaInCheckout = document.getElementById("countBananaInCheckout");
    let countBananaInCheckout = Number(window.localStorage.getItem("banana"));
    countBananaInCheckout++;
    displayBananaInCheckout.textContent = countBananaInCheckout;
    window.localStorage.setItem("banana", Number(countBananaInCheckout));
    window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + countBananaInCheckout + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));    
    displayTotalNumberOfFruitsInCheckout();
    displayTotalPriceInCheckout();
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
        displayTotalPriceInCheckout();
        removeBananaCardInCheckoutIfChangedToZero();
    }
}

function removeBananaCardInCheckoutIfChangedToZero(){
    let countBananaInCheckout = Number(window.localStorage.getItem("banana"));
    const displayBananaCard = document.getElementById("bananaCard");
    if (countBananaInCheckout == 0){
        displayBananaCard.style.display = "none";
    }
}

//grapes
function plusGrapesInCheckout(){
    const displayGrapesInCheckout = document.getElementById("countGrapesInCheckout");
    let countGrapesInCheckout = Number(window.localStorage.getItem("grapes"));
    countGrapesInCheckout++;
    displayGrapesInCheckout.textContent = countGrapesInCheckout;
    window.localStorage.setItem("grapes", Number(countGrapesInCheckout));
    window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + countGrapesInCheckout + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));    
    displayTotalNumberOfFruitsInCheckout();
    displayTotalPriceInCheckout();
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
        displayTotalPriceInCheckout();
        removeGrapesCardInCheckoutIfChangedToZero();
    }
}

function removeGrapesCardInCheckoutIfChangedToZero(){
    let countGrapesInCheckout = Number(window.localStorage.getItem("grapes"));
    const displayGrapesCard = document.getElementById("grapesCard");
    if (countGrapesInCheckout == 0){
        displayGrapesCard.style.display = "none";
    }
}

//honeydew melon
function plusHoneydewMelonInCheckout(){
    const displayHoneydewMelonInCheckout = document.getElementById("countHoneydewMelonInCheckout");
    let countHoneydewMelonInCheckout = Number(window.localStorage.getItem("honeydewMelon"));
    countHoneydewMelonInCheckout++;
    displayHoneydewMelonInCheckout.textContent = countHoneydewMelonInCheckout;
    window.localStorage.setItem("honeydewMelon", Number(countHoneydewMelonInCheckout));
    window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + countHoneydewMelonInCheckout + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));    
    displayTotalNumberOfFruitsInCheckout();
    displayTotalPriceInCheckout();
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
        displayTotalPriceInCheckout();
        removeHoneydewMelonCardInCheckoutIfChangedToZero();
    }
}

function removeHoneydewMelonCardInCheckoutIfChangedToZero(){
    let countHoneydewMelonInCheckout = Number(window.localStorage.getItem("honeydewMelon"));
    const displayHoneydewMelonCard = document.getElementById("honeydewMelonCard");
    if (countHoneydewMelonInCheckout == 0){
        displayHoneydewMelonCard.style.display = "none";
    }
}

//watermelon
function plusWatermelonInCheckout(){
    const displayWatermelonInCheckout = document.getElementById("countWatermelonInCheckout");
    let countWatermelonInCheckout = Number(window.localStorage.getItem("watermelon"));
    countWatermelonInCheckout++;
    displayWatermelonInCheckout.textContent = countWatermelonInCheckout;
    window.localStorage.setItem("watermelon", Number(countWatermelonInCheckout));
    window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + countWatermelonInCheckout + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));    
    displayTotalNumberOfFruitsInCheckout();
    displayTotalPriceInCheckout();
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
        displayTotalPriceInCheckout();
        removeWatermelonCardInCheckoutIfChangedToZero();
    }
}

function removeWatermelonCardInCheckoutIfChangedToZero(){
    let countWatermelonInCheckout = Number(window.localStorage.getItem("watermelon"));
    const displayWatermelonCard = document.getElementById("watermelonCard");
    if (countWatermelonInCheckout == 0){
        displayWatermelonCard.style.display = "none";
    }
}

//lemon
function plusLemonInCheckout(){
    const displayLemonInCheckout = document.getElementById("countLemonInCheckout");
    let countLemonInCheckout = Number(window.localStorage.getItem("lemon"));
    countLemonInCheckout++;
    displayLemonInCheckout.textContent = countLemonInCheckout;
    window.localStorage.setItem("lemon", Number(countLemonInCheckout));
    window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + countLemonInCheckout + Number(window.localStorage.getItem("mango")) + Number(window.localStorage.getItem("pomegranate")));    
    displayTotalNumberOfFruitsInCheckout();
    displayTotalPriceInCheckout();
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
        displayTotalPriceInCheckout();
        removeLemonCardInCheckoutIfChangedToZero();
    }
}

function removeLemonCardInCheckoutIfChangedToZero(){
    let countLemonInCheckout = Number(window.localStorage.getItem("lemon"));
    const displayLemonCard = document.getElementById("lemonCard");
    if (countLemonInCheckout == 0){
        displayLemonCard.style.display = "none";
    }
}

//mango
function plusMangoInCheckout(){
    const displayMangoInCheckout = document.getElementById("countMangoInCheckout");
    let countMangoInCheckout = Number(window.localStorage.getItem("mango"));
    countMangoInCheckout++;
    displayMangoInCheckout.textContent = countMangoInCheckout;
    window.localStorage.setItem("mango", Number(countMangoInCheckout));
    window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + countMangoInCheckout + Number(window.localStorage.getItem("pomegranate")));    
    displayTotalNumberOfFruitsInCheckout();
    displayTotalPriceInCheckout();
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
        displayTotalPriceInCheckout();
        removeMangoCardInCheckoutIfChangedToZero();
    }
}

function removeMangoCardInCheckoutIfChangedToZero(){
    let countMangoInCheckout = Number(window.localStorage.getItem("mango"));
    const displayMangoCard = document.getElementById("mangoCard");
    if (countMangoInCheckout == 0){
        displayMangoCard.style.display = "none";
    }
}

//pomegranate
function plusPomegranateInCheckout(){
    const displayPomegranateInCheckout = document.getElementById("countPomegranateInCheckout");
    let countPomegranateInCheckout = Number(window.localStorage.getItem("pomegranate"));
    countPomegranateInCheckout++;
    displayPomegranateInCheckout.textContent = countPomegranateInCheckout;
    window.localStorage.setItem("pomegranate", Number(countPomegranateInCheckout));
    window.localStorage.setItem("totalNumberOfFruits", Number(window.localStorage.getItem("redApple")) + Number(window.localStorage.getItem("greenApple")) + Number(window.localStorage.getItem("orange")) + Number(window.localStorage.getItem("banana")) + Number(window.localStorage.getItem("grapes")) + Number(window.localStorage.getItem("honeydewMelon")) + Number(window.localStorage.getItem("watermelon")) + Number(window.localStorage.getItem("lemon")) + Number(window.localStorage.getItem("mango")) + countPomegranateInCheckout);    
    displayTotalNumberOfFruitsInCheckout();
    displayTotalPriceInCheckout();
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
        displayTotalPriceInCheckout();
        removePomegranateCardInCheckoutIfChangedToZero();
    }
}

function removePomegranateCardInCheckoutIfChangedToZero(){
    let countPomegranateInCheckout = Number(window.localStorage.getItem("pomegranate"));
    const displayPomegranateCard = document.getElementById("pomegranateCard");
    if (countPomegranateInCheckout == 0){
        displayPomegranateCard.style.display = "none";
    }
}


//calculate and display total price in checkout
function displayTotalPriceInCheckout(){
    const priceRedAppleInNumber = Number(allFruitsInStock[0].price);
    const priceGreenAppleInNumber = Number(allFruitsInStock[1].price);
    const priceOrangeInNumber = Number(allFruitsInStock[2].price);
    const priceBananaInNumber = Number(allFruitsInStock[3].price);
    const priceGrapesInNumber = Number(allFruitsInStock[4].price);
    const priceHoneydewMelonInNumber = Number(allFruitsInStock[5].price);
    const priceWatermelonInNumber = Number(allFruitsInStock[6].price);
    const priceLemonInNumber = Number(allFruitsInStock[7].price);
    const priceMangoInNumber = Number(allFruitsInStock[8].price);
    const pricePomegranateInNumber = Number(allFruitsInStock[9].price);
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
}