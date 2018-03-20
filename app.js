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

//other routes should be in a differnt file this one reserved for index routes
const users = require('./routes/users');

//variable for port that will be used, can be any no, not necesarily 3000
const port = 3000;

//allow access by any domain by using cors middleware, authentication will also be provided
app.use(cors());

//body-parser middleware to parse incoming request bodies
app.use(bodyParser.json());

//user routes
app.use('/users', users);

//create route to home page (index route)
app.get('/', (req, res) => {
    res.send('Invalid endpoint');
})

//listen on specified port and add callback using arrow function
app.listen(port, () => {
    console.log('Server started on port ' + port + '...');
    
});