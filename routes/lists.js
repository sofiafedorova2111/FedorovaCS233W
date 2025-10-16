const express = require('express');
const router = express.Router();
const listOfItems = require('../data');
router.get('/', (req, res) => {
    res.json(listOfItems);
  });
  

// GET a single item by ID
router.get('/:id', (req, res) => {
  const itemId = parseInt(req.params.id); 

  // ✅ Use .find() safely on the array
  const item = listOfItems.find(i => i.id === itemId);

  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  res.json(item);
});


router.post('/', (req, res) => {
  const { listItem, section, price, coupon } = req.body;

  if (!listItem || !section || price === undefined) {
    return res.status(400).json({ error: 'Missing name of the item, section, or price' });
  }

  const newItem = {
    id: listOfItems.length + 1,
    itemName: listItem,
    section,
    price,
    coupon: coupon || false
  };

  listOfItems.push(newItem);
  res.status(201).json(newItem);
});

module.exports = router;
