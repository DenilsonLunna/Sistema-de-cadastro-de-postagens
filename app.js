const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Sequelize = require('sequelize');



//Config
    //Template engine
    app.engine("handlebars", handlebars({defaultLayout:'main'}))
    app.set("view engine", "handlebars");

    //Conexão com banco de dados mySQL
    const sequelize = new Sequelize('teste', 'root', '391223', {
        host:"localhost",
        dialect:"mysql"
    })




    
app.listen(8081, function(){
    console.log("Servidor rodando");
})