const express = require("express");
const app = express();

//sinalizando que estamos usando json para o body das req
app.use(express.json());

app.get("/", function (req, res){
    res.send("Hello Word");
});

const lista = [
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

    res.send(lista);
});

app.post("/pontuacoes", (req,res)=>{
    const item = req.body;

    lista.push({
        id: lista.length + 1,
        nome: item.nome,
        pontos: item.pontos
    });

    res.send("post");
});
//END POINT CREATE - [POST] /pontuacoes
//END POINT CREATE - [GET] /pontuacoes

app.listen(3000);