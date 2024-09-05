const express = require("express");
const router = express.Router();
const Product = require("../models/model.js");
const {getItem, findOneItem, updatedItem, deleteItem,createItem } = require('../controller/product.controller.js');
const { model } = require("mongoose");

router.get('/', getItem);
router.get('/:id', findOneItem);
//router.post('/', createItem );
router.post('/', async (req, res) => {
    try {
        const { mood, detail } = req.body; // Adjust field names as necessary
        const newProduct = new Product({ mood, detail });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
router.put('/:id', updatedItem);
router.delete('/:id', deleteItem);


module.exports = router;



