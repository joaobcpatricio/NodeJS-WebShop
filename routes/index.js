//4-create my route file.I could also create two files for eacah route, index and users
const path = require('path');       //21-add the path that works both on unix and windows OS
const express = require('express'); //5-import express 
const router = express.Router();    //6-create my router

router.get('/', (req, res, next) => {   //10- So if we visit " http://localhost:3000/"users " we see written Route1
    // res.send('Route 1'); //11-return dummy text for now
        //20-with senFile I can now send the html, but it requires a path.
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));   //23-".." so we get out of this folder, and then proceed on vies folder o the index file
});

router.get('/users', (req, res, next) => {  //12 - So if we vist " http://localhost:3000/users " we see written Route 2"
    // res.send('Route 2');     //13-return dummy text for now
    res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));    //22, 23, 24- here I just change to users file
});

module.exports = router;    //7-export it