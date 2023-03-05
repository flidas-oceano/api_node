const mongoose = require('mongoose');
  
  const ItemSchema = new mongoose.Schema({
    // Define your schema fields here
  });
  
  module.exports = mongoose.model('Item', ItemSchema);