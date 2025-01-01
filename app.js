const express = require('express');
const path = require('path');
const { title } = require('process');

const app = express()

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];
app.get('/', (req, res) => {
    res.render('index', { title: "Mini messageBoard", messages: messages });
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Express app listening on PORT: ${PORT}`);
});
