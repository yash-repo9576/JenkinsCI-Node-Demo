const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({"response": "Hello World!! NodeJS/ExpressJS working..."})
});

app.get('/welcome', (req, res) => {
    res.json({"response": "Welcome to Sample API from yash-repo9576"})
});

app.get('/test', (req, res) => {
    res.json({"response": "Testing Jernkins Trigger..."})
});

app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});
module.exports = app;