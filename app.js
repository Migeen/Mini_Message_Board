const express = require('express');
const path = require('node:path');
const messageRouter = require('./routers/messageRouter');
const app = express()
const PORT = 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use('/', messageRouter);
app.get('*', (req, res) => {
    throw new Error('404 Page Not Found! ');
});

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});
