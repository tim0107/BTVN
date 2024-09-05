// this is where we code all the function for the routes, all the function will be export to the routes folder 
const Product = require("../models/model.js");

const getItem = async (req, res) => {
    try {
        const find = await Product.find({});
        res.status(200).json(find);

    } catch (error) {
        
        res.status(500).json({message: error.message});

    }};

const createItem = async (req, res) => { // post use to create item
    try {
        const result = await Product.create(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const findOneItem =  async (req, res) => {
    try {
        const { id } = req.params;
        const find = await Product.findById(id);
        res.status(200).json(find);

    } catch (error) {
        
        res.status(500).json({message: error.message});

    }
};

const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const find = await Product.findByIdAndDelete(id);
        if (!find){
            return res.status(404).json({message: "item not found"})
        }


        res.status(200).json({message: "deleted"});

    } catch (error) {
        
        res.status(500).json({message: error.message});

    }
};

const updatedItem = async (req, res) => {
    try {
        const { id } = req.params;
        const find = await Product.findByIdAndUpdate(id, req.body);
        if (!find){
            return res.status(404).json({message: "item not found"})
        }

        const updatedItem = await Product.findById(id);

        res.status(200).json(updatedItem);

    } catch (error) {
        
        res.status(500).json({message: error.message});

    }
};


module.exports = {
    getItem,
    createItem,
    findOneItem,
    deleteItem,
    updatedItem
};