const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./Models/Post")




//Config
    //Template engine
        app.engine("handlebars", handlebars({defaultLayout:'main'}))
        app.set("view engine", "handlebars");
    //Body parser
        app.use(bodyParser.urlencoded({extended:false}))
        app.use(bodyParser.json())


    app.get("/", function(req,res){
        res.render("home");
    })
    app.get('/cad', function(req,res){
        res.render("formulario");
    })
    app.post('/add', function(req,res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect("/")
        }).catch(function(erro){
            res.send("Houve um erro ao enviar Post"+erro);
        })
    })
    
app.listen(8081, function(){
    console.log("Servidor rodando");
})