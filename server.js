//import express
const express = require('express')
const path = require('path');

//create instance of express
const app = express();

//use app joins to puplic folder
app.use(express.static('public'));

//set the port
const PORT = process.env.PORT || 3001;

// listen for port
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));