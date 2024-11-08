const Model = require("../Models/itemModel");
const mongoose = require('mongoose');


const getAllItem = async (req, res) => {
    try {
        const findAll = await Model.find({});
        res.status(200).json(findAll)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createItem = async (req, res) => {
    try {
        const { name, price, categories } = req.body;
        const create = await Model.create(req.body);
        if (create) {
            res.status(201).json({ message: 'item created' });
        } else {
            res.status(400).json({ message: 'failed' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }
};

const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        const updated = await Model.findByIdAndUpdate(id, body, { new: true });
        if (updated) {
            res.status(200).json({ message: 'Item updated', data: updated });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;

        const deleted = await Model.findByIdAndDelete(id);
        if (deleted) {
            res.status(200).json({ message: 'Item deleted' });
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllItem, createItem, updateItem, deleteItem };
