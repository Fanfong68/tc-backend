require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import the Item model
const Item = require('./models/item')(sequelize, DataTypes);

// Sync database
sequelize.sync();

// Get all items
app.get('/items', async (req, res) => {
  const items = await Item.findAll({
    where: {
      deletedAt: null
    }
  });
  res.json(items);
});

// Get a single item
app.get('/items/:id', async (req, res) => {
  const item = await Item.findByPk(req.params.id);
  if (item && !item.deletedAt) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Create a new item
app.post('/items', async (req, res) => {
  const item = await Item.create(req.body);
  res.json(item);
});

// Update an item
app.put('/items/:id', async (req, res) => {
  const item = await Item.findByPk(req.params.id);
  if (item && !item.deletedAt) {
    await item.update(req.body);
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Delete an item (soft delete)
app.delete('/items/:id', async (req, res) => {
  const item = await Item.findByPk(req.params.id);
  if (item && !item.deletedAt) {
    await item.update({ deletedAt: new Date() });
    res.json({ message: 'Item deleted' });
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
