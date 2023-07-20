import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.route";
import Terms from "./routes/terms/terms.route";
import Support from "./routes/support/support.route";
import SignInSystemAdministration from "./routes/sign-in-system-administration/sign-in-system-administration.route";
import SignedInSystemAdministration from "./routes/signed-in-system-administration/signed-in-system-administration.route";
import About from "./routes/about/about.route";
import Checkout from "./routes/checkout/checkout.component";


const App = () => {

  const [getFruitData, setGetFruitData] = useState([]);
  const [getImage, setGetImage] = useState();
  const [displayNumberOnShoppingBasket, setDisplayNumberOnShoppingBasket] = useState(false);

  var fruitData = [{}];

  useEffect(() => {
    fetch("http://localhost:3000/fruitData", {
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(fruitData)
    })
    .then(response => response.json())
    .then(data => {
      fruitData = data;
      fruitData.forEach(fruit => {
        fruit.amount = Number(localStorage.getItem(fruit.id));
      });
      setGetFruitData(fruitData);
    })
    .catch(err => console.log("error fetch fruit data on first page"))
  }, []);


  return (
    <div>
    <Routes>
      <Route path="/" element={<Home fruitData={getFruitData} displayNumberOnShoppingBasket={displayNumberOnShoppingBasket} setDisplayNumberOnShoppingBasket={setDisplayNumberOnShoppingBasket}></Home>}></Route>
      <Route path="/checkout" element={<Checkout fruitData={getFruitData}></Checkout>}></Route>
      <Route path="/terms-of-purchase" element={<Terms displayNumberOnShoppingBasket={displayNumberOnShoppingBasket}></Terms>}></Route>
      <Route path="/customer-support" element={<Support displayNumberOnShoppingBasket={displayNumberOnShoppingBasket}></Support>}></Route>
      <Route path="/about-us" element={<About displayNumberOnShoppingBasket={displayNumberOnShoppingBasket}></About>}></Route>
      <Route path="/system-administration/sign-in" element={<SignInSystemAdministration></SignInSystemAdministration>}></Route>
      <Route path="/system-administration/signed-in" element={<SignedInSystemAdministration></SignedInSystemAdministration>}></Route>
    </Routes>
    </div>
  );
}


export default App;