//main server entry file

//add dependencies
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

//initialize app variable with express
const app = express();

//variable for port that will be used, can be any no, not necesarily 3000
const port = 3000;

//create route to home page
app.get('/', (req, res) => {
    res.send('Invalid endpoint');
})

//listen on specified port and add callback using arrow function
app.listen(port, () => {
    console.log('Server started on port ' + port + '...');
    
});