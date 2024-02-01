const bodyParser = require('body-parser');
const express = require('express');
const { connectDB } = require("./db.js");
const router = require('./routers/router.js');
const app = express();
app.use(bodyParser.json());
app.use(router);
connectDB();

app.listen(3000);