const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const bodyParser = require("body-parser");
const cors = require("cors");
const knex = require("knex");
const multer  = require('multer');

const database = knex({
    client: '',
    connection: {
      host : '',
      user : '',
      password : '',
      database : ''
    }
});


const app = express();
const path = require('path');
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/image/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
const upload = multer({ storage: storage })


//send id, fruit, price and image src of available products from database
app.post('/fruitData', function (req, res){
    database.select("id", "fruit", "price", "imageSrc").from("fruits")
    .where("available", "=", true)
    .orderBy("id")
    .then(data => {
        res.json(data);
    })
    .catch(err => res.json("error getting fruit data"))
});


//check available amount when adding fruit on first page
app.post('/', function (req, res) {
    database.select("amount").from("fruits")
    .where("id", "=", req.body.id)
    .then(data => {
        if (req.body.amount < data[0].amount){
            res.json("success");
            }
            else {
                res.json("Out of stock")
            } 
    })
    .catch(err => res.status(400).json("error"))
});


//check available amount when adding fruit in checkout
app.post('/addfruitincheckout', function (req, res) {
    database.select("amount").from("fruits")
    .where("id", "=", req.body.id)
    .then(data => {
        if (req.body.amount < data[0].amount){
            res.json("success");
            }
            else {
                res.json("Out of stock")
            } 
    })
    .catch(err => res.status(400).json("error"))
});


//check available amount and update database on click at checkout button
app.post('/checkout', function (req, res) {
    database.select("amount").from("fruits")
    .whereIn("id", req.body.map(id => id.id))
    .orderBy("id")
    .then(data => {
        var storeResult=[];
        for (var i=0; i<req.body.length; i++){
            if (req.body[i].amount > data[i].amount){
                storeResult.push(req.body[i].fruit);
            }
            else if (req.body[i].amount <= data[i].amount){
                database("fruits")
                .update("amount", (data[i].amount)-(req.body[i].amount))
                .where("id", "=", req.body[i].id)
                .catch(err => res.json("error updating amount in database"))
            }
        }
        if (storeResult.length===0){
            res.json("success");
        }
        else {
            res.json("Out of stock" + " (" + storeResult.join(", ") + ")")
        }
    })
    .catch(err => res.status(400).json("error"))
});


//check sign in credentials
app.post('/sign-in', function (req, res) {
    database.select("password").from("credentials")
    .where("userName", "=", req.body.userName)
    .then(data => {
        if (req.body.password === data[0].password){
            res.json("success");
            }
            else {
                res.json("wrong credentials")
            } 
    })
    .catch(err => res.status(400).json("error"))
});


//send id, fruit, price, amount, available and image src from database for administration
app.post('/allFruitDataForAdministration', function (req, res){
    database.select("id", "fruit", "price", "amount", "available", "imageSrc").from("fruits")
    .orderBy("id")
    .then(data => {
        res.json(data);
    })
    .catch(err => res.json("error getting all data"))
});


//Add image to server
app.post('/addImageToServer', upload.single('file'), function (req, res){
    if (req.file){
        res.json("success")
    }
});


//Add product to database
app.post('/addProductToDatabase', function (req, res){
    database("fruits")
    .insert({fruit: req.body.fruit, price: req.body.price, amount: req.body.amount, available: req.body.available, imageSrc: "http://localhost:3000/image/uploads/" + req.body.imageSrc})
    .then(res.json("success"))
    .catch(err => res.json("error updating amount in database"))
});


//Update product in database
app.post('/updateProductsInDatabase', function (req, res){
    database.select("fruit", "price", "amount", "available", "imageSrc").from("fruits")
    .where("id", "=", req.body.id)
    .then(data => {
        if (req.body.fruit!==data[0].fruit){
            database("fruits")
            .update("fruit", req.body.fruit)
            .where("id", "=", req.body.id)
            .catch(err => res.json("error updating fruit in database"))
        }
        if (req.body.price!==data[0].price){
            database("fruits")
            .update("price", req.body.price)
            .where("id", "=", req.body.id)
            .catch(err => res.json("error updating price in database"))
        }
        if (req.body.amount!==data[0].amount){
            database("fruits")
            .update("amount", req.body.amount)
            .where("id", "=", req.body.id)
            .catch(err => res.json("error updating amount in database"))
        }
        if (req.body.available!==data[0].available){
            database("fruits")
            .update("available", req.body.available)
            .where("id", "=", req.body.id)
            .catch(err => res.json("error updating available in database"))
        }
        if (req.body.imageSrc!==data[0].imageSrc){
            database("fruits")
            .update("imageSrc", ("http://localhost:3000/image/uploads/" + req.body.imageSrc))
            .where("id", "=", req.body.id)
            .catch(err => res.json("error updating imageSrc in database"))
        }
    })
    .then(res.json("success"))
    .catch(err => res.status(400).json("error"))
    });


app.listen(process.env.PORT || 3000, ()=>{
    console.log(`app is running on port ${process.env.PORT}`);
})