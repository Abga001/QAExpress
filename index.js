const express = require('express');

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

const newWrestler = [ {
    name: "Ric Flair",
    age: 73,
    special_move: "Vertical Suplex",
    signature_taunt: "Woooooo"

}];

//app.get(`/`, (req, res) => res.send(`WWE formerly known as WWF`));

//let names = [`The Undertake`, `Stone-Cold`, `The Rock`, `Macho Man`, `John Cena`]

//app.get(`/getAll`, (req, res) => res.send(`names`))

app.post("/createWrestler", (req, res, next) => {
    console.log("BODY:", req.body);
    if (!req.body || Object.keys(req.body).length < 1) return next({ status: 400, message: "No body"})

    newWrestler.push(req.body);
    return res.status(201).send(newWrestler[newWrestler.length - 1]);
});

const server = app.listen(4494, () => {
    console.log(`Started. ${server.address().port}`);
})