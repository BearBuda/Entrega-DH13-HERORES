const express = require("express");
const app = express();
const path = require("path");
app.use (express.static("public"));
app.listen(3000, () =>{
    console.log('servidor corriendo en http://localhost:3000/')
});

app.get('/', (req, res) => {
    let htmlPath = path.resolve(__dirname,'./views/index.html');
    res.sendFile(htmlPath);
});

app.get('/babbage', (req, res) => {
    let htmlPath = path.resolve(__dirname,'./views/babbage.html');
    res.sendFile(htmlPath);
});

app.get('/berners-lee', (req, res) => {
    let htmlPath = path.resolve(__dirname,'./views/berners-lee.html');
    res.sendFile(htmlPath);
});

app.get('/clarke', (req, res) => {
    let htmlPath = path.resolve(__dirname,'./views/clarke.html');
    res.sendFile(htmlPath);
});

app.get('/hamilton', (req, res) => {
    let htmlPath = path.resolve(__dirname,'./views/hamilton.html');
    res.sendFile(htmlPath);
});

app.get('/hopper', (req, res) => {
    let htmlPath = path.resolve(__dirname,'./views/hopper.html');
    res.sendFile(htmlPath);
});

app.get('/lovelace', (req, res) => {
    let htmlPath = path.resolve(__dirname,'./views/lovelace.html');
    res.sendFile(htmlPath);
});

app.get('/turing', (req, res) => {
    let htmlPath = path.resolve(__dirname,'./views/turing.html');
    res.sendFile(htmlPath);
});
