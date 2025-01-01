const express = require('express');
const messageRouter = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date().toDateString()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date().toDateString()
    }
];

messageRouter.get('/', (req, res) => {
    res.render('index', { title: "Mini messageBoard", messages: messages });
});
messageRouter.get('/new', (req, res) => res.render('form', {title: 'New message'}));
messageRouter.post('/new', (req, res) => {
    messages.push({ text: req.body.message, user: req.body.author, added: new Date().toDateString() });
    res.redirect('/');
});

module.exports = messageRouter;