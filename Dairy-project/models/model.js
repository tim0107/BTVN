// model are used to define the structured for our data. 


const { timeStamp } = require('console');
const { default: mongoose } = require('mongoose');
const { type } = require('os');

const ProductSchema = mongoose.Schema(
    {
        detail: {
            type: String
          //  require: [true, "enter the details" ],
        },

        mood: {
            type: String
           // require: true,
        },
    },
    {
        timeStamp: true,
    }
);

const Product = mongoose.model("detail",ProductSchema);

module.exports = Product;

// model is use to create product in our database, the blue print is the schema. 