//all users routes will be stored here

const express = require('express');
const router = express.Router();

//register route
router.get('/register', (req, res, next) => {
    res.send('Register');
});

module.exports = router;