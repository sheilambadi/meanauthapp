//all users routes will be stored here

const express = require('express');
const router = express.Router();

//register route
router.post('/register', (req, res, next) => {
    res.send('Register');
});

//authenticate route
router.post('/authenticate', (req, res, next) => {
    res.send('Authenticate');
});

//profile route
router.get('/profile', (req, res, next) => {
    res.send('Profile');
});

module.exports = router;