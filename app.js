const mysql = require("mysql");
const express = require("express");
const { sendFile } = require("express/lib/response");
const bodyParser = require("body-parser");
const { NULL } = require("mysql/lib/protocol/constants/types");
const encoder = bodyParser.urlencoded();
const app = express();
var logged = false;
var user = NULL
var isWrongPass = false;
app.set('view engine', 'pug')
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "nodejs"
});

connection.connect(function(error){
    if (error) throw error 
    else console.log("connected")
})

app.get("/", function(req, res){
    if (logged === false){
        if (isWrongPass === false) {
            res.sendFile(__dirname + "/login.html");
        } else {
            res.sendFile(__dirname + "/login2.html");
        }
    } else {
        res.render('index', { message: `You are logged in as ${user}` })
    } 
    
})

app.post("/", encoder, function(req, res){
    var username = req.body.username;
    var password = req.body.password;

    connection.query("select * from loginuser where user_name = ? and user_pass = ?",[username, password], function(error, results, field){
        if (results.length > 0) {
            res.redirect("/");
            logged = true
            isWrongPass = false
            user = username
            console.log(results)
        } else {
            isWrongPass = true
            res.redirect("/");
            console.log(results)
        }
        res.end();
    })
})

app.get("/register", function (req,res){
    res.sendFile(__dirname + "/register.html");
})

app.post("/register", encoder, function(req, res){
    var username = req.body.username;
    var password = req.body.password;

    connection.query(`insert into loginuser (user_name, user_pass) values ('${username}','${password}')`, function(error, results, field){
        if (results.length > 0) {
            res.redirect("/");
            console.log(results)
        } else {
            res.redirect("/");
            console.log(results)
        }
        res.end();
    })
})

app.get("/logout", function (req, res){
    logged = false
    res.redirect("/")
})

app.get("/wishlist", function (req,res){
    res.sendFile(__dirname + "/wishlist.html");
})

app.listen(8081);