const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const bodyParser = require("body-parser");
const cors = require("cors");
const knex = require("knex");

const database = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : '',
      password : '',
      database : ''
    }
});

const app = express();
app.use(bodyParser.json());
app.use(cors());


//check available amount when adding fruit on first page
app.post('/', function (req, res) {
    database.select("fruit", "amount").from("fruits")
    .where("fruit", "=", req.body.fruit)
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


//send price from database
app.post('/price', function (req, res){
    database.select("price").from("fruits")
    .where("fruit", "=", req.body.fruits[0].fruit)
    .orWhere("fruit", "=", req.body.fruits[1].fruit)
    .orWhere("fruit", "=", req.body.fruits[2].fruit)
    .orWhere("fruit", "=", req.body.fruits[3].fruit)
    .orWhere("fruit", "=", req.body.fruits[4].fruit)
    .orWhere("fruit", "=", req.body.fruits[5].fruit)
    .orWhere("fruit", "=", req.body.fruits[6].fruit)
    .orWhere("fruit", "=", req.body.fruits[7].fruit)
    .orWhere("fruit", "=", req.body.fruits[8].fruit)
    .orWhere("fruit", "=", req.body.fruits[9].fruit)
    .orderBy("id")
    .then(data => {
        res.json(data);
    })
    .catch(err => res.json("error getting price"))
});


//check available amount when adding fruit in checkout
app.post('/addfruitincheckout', function (req, res) {
    database.select("fruit", "amount").from("fruits")
    .where("fruit", "=", req.body.fruit)
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
    database.select("fruit", "amount").from("fruits")
    .where("fruit", "=", req.body.fruits[0].fruit)
    .orWhere("fruit", "=", req.body.fruits[1].fruit)
    .orWhere("fruit", "=", req.body.fruits[2].fruit)
    .orWhere("fruit", "=", req.body.fruits[3].fruit)
    .orWhere("fruit", "=", req.body.fruits[4].fruit)
    .orWhere("fruit", "=", req.body.fruits[5].fruit)
    .orWhere("fruit", "=", req.body.fruits[6].fruit)
    .orWhere("fruit", "=", req.body.fruits[7].fruit)
    .orWhere("fruit", "=", req.body.fruits[8].fruit)
    .orWhere("fruit", "=", req.body.fruits[9].fruit)
    .orderBy("id")
    .then(data => {
        var storeResult=[];
        for (var i=0; i<req.body.fruits.length; i++){
            if (req.body.fruits[i].amount > data[i].amount){
                storeResult.push(req.body.fruits[i].fruit);
            }
            else if (req.body.fruits[i].amount <= data[i].amount){
                database("fruits")
                .update("amount", (data[i].amount)-(req.body.fruits[i].amount))
                .where("fruit", "=", req.body.fruits[i].fruit)
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


app.listen(process.env.PORT || 3000, ()=>{
    console.log(`app is running on port ${process.env.PORT}`);
})