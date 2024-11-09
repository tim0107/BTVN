const express = require('express');
const {createItem, getAllItem, updateItem,deleteItem} = require('../Controllers/itemController');

const router = express.Router();


router.post('/', createItem);
router.get('/',getAllItem);
router.patch('/:id',updateItem);
router.delete('/:id',deleteItem)

console.log('endpoint hit')


  

module.exports = router;