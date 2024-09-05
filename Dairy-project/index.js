// this file handle the back-end

const express = require('express');
const { default: mongoose } = require('mongoose');
const Product = require('./models/model');
const productRoute = require("./routes/product.route.js");
const app = express()
const cors = require('cors'); // Import CORS


//middle ware
app.use(express.json()); // build in middleware
// we are not allow to parse json to Nodejs by default. 
app.use(express.urlencoded({extended: false}));
app.use(cors()); // Use CORS


//routes
app.use('/api/products', productRoute)
// this is the http route


//this is the connection to the database, if it connect succeed the port will run
mongoose.connect("mongodb+srv://truonggoiii2003:Chuotyeu1@backend.1j4gw.mongodb.net/?retryWrites=true&w=majority&appName=backend")
.then(() => {
    console.log("successful");
    app.listen(3001, () => {
        console.log("running on port 3001");
    });
})
.catch(() => {
    console.log("fail");

})