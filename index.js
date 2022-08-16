const express = require("express");
const { MongoClient } = require("mongodb");

const url = "mongodb+srv://admin:LdQHrR3iAM9u4Mtw@cluster0.ih1f4.mongodb.net";
const dbName = "jf_anderson_silverio";


async function main() {
    //realizando a conection com o mongo cliente
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection("pontuacoes");

    //
    const app = express();

    //sinalizando que estamos usando json para o body das req
    app.use(express.json());

    app.get("/", function (req, res) {
        res.send("Hello Word");
    });

    app.get("/pontuacoes", async (req, res) => {
        const items = await collection
        .find()//busca todos os registros da colection
        .sort({ pontos: -1 })//organiza por ordem -1 decrecente ou 1 crecente
        .limit(10)//limita a quantidade de resultados 
        //.skip()//paginação
        .toArray();
        
        res.send(items);
    });

    app.post("/pontuacoes", async (req, res) => {
        const item = req.body;

        await collection.insertOne(item);

        res.send(item);
    });

    app.listen(3000);
}

main();