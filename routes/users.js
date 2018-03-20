//all users routes will be stored here

const express = require('express');
const router = express.Router();

//register route
router.get('/register', (req, res, next) => {
    res.send('Register');
});

//authenticate route
router.get('/authenticate', (req, res, next) => {
    res.send('Authenticate');
});

//profile route
router.get('/profile', (req, res, next) => {
    res.send('Profile');
});

//validate route
router.get('/validate', (req, res, next) => {
    res.send('Validate');
});

module.exports = router;