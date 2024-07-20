//import express
const express = require('express');
const path = require('path');
const routes = require('./routes')
//create instance of express
const app = express();

//set the port
const PORT = process.env.PORT || 3001;

//use app joins to puplic folder
app.use(express.static('public'));

//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// listen for port
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));