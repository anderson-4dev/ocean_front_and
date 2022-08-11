const express = require("express");
const app = express();

app.get("/", function (req, res){
    res.send("Hello Word");
});

app.get("/oi", function (req, res){
    res.send("Oi mundo");
});

const users = [
    {
        id: 1,
        nome: "Anderson",
        pontos: 0
    },
    {
        id: 2,
        nome: "Davi",
        pontos: 0
    },
    {
        id: 3,
        nome: "Sandra",
        pontos: 0
    },
];

app.get("/pontuacoes", (req,res)=>{

    res.send("ssssss")
});

//END POINT CREATE - [POST] /pontuacoes
//END POINT CREATE - [GET] /pontuacoes

app.listen(3000);