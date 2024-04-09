const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// MongoDB URI - replace with your database URI
const db = 'mongodb://localhost:27017/myapp';

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Create Mongoose Schemas
const UserSchema = new mongoose.Schema({ name: String, email: String });
const ItemSchema = new mongoose.Schema({ name: String, description: String });

// Create Mongoose Models
const User = mongoose.model('User', UserSchema);
const Item = mongoose.model('Item', ItemSchema);

// Routes
// Get all users
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Create a user
app.post('/users', async (req, res) => {
  const newUser = new User(req.body);
  const savedUser = await newUser.save();
  res.json(savedUser);
});

// Update a user
app.put('/users/:id', async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedUser);
});

// Delete a user
app.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
});

// Get all items
app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Create an item
app.post('/items', async (req, res) => {
  const newItem = new Item(req.body);
  const savedItem = await newItem.save();
  res.json(savedItem);
});

// Update an item
app.put('/items/:id', async (req, res) => {
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItem);
});

// Delete an item
app.delete('/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: 'Item deleted' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));