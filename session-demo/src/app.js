const express = require('express');
const session = require('express-session');
const router = require('./index');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(session({ secret: "my secret session", resave: true, saveUninitialized: true }));

app.use('/', router);

app.listen(3000, () => {
    console.log("server running on port 3000");
})
