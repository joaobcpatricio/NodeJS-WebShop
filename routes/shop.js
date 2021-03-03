//30-configure the shop alike the other router index
const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    // res.send('Shop');
    res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
});

module.exports = router;