//0-I started by running npm init, installed the modules and added the surtcut of the " "start": "nodemon app.js" "

const path = require('path');                       //28-add the path that works both on unix and windows OS
const express = require('express');                 //1-import express
const bodyParser = require('body-parser');          //34- add the body-parser module, so we configure the body

const app = express();                              //2-create my app

app.use(bodyParser.urlencoded({extended: false}));  //in order to parse incoming request bodys sent through a forum (sometimes is default, other versions they remove it so better set it)

const mainRoutes = require('./routes/index');       //8-import the previously created routes
const shopRoutes = require('./routes/shop');        //29-add the shop router
const adminRoutes = require('./routes/admin');      //35-Add Admin


app.use(express.static(path.join(__dirname, 'public'))); //27-grants read access to this public path as static, by default request will be forward here

// app.use(mainRoutes);                                 //9-I can use now the mainRoute as middleware to thunnel all requests
app.use(shopRoutes);
app.use(adminRoutes);
// app.use('/admin',adminRoutes);                       //39 by adding this here, inside on the url paths they are all after a "/admin" start

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));    //Define the error design upon other requests
});

app.listen(3000);                                       //3-listen the server on port 3000