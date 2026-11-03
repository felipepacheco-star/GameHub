

require("dotenv").config();
const { json } = require("body-parser");
const express = require("express");

const PORTA = Number(process.env.PORTA);
const app = express();

app.get("/",(req,res)=>{
    res.status(200).json({mensagem: "API funcionando"})
});

app.listen(PORTA, ()=>{});