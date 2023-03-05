export const createMongoModel= (name) => {
    return `const mongoose = require('mongoose');
  
  const ${name}Schema = new mongoose.Schema({
    // Define your schema fields here
  });
  
  module.exports = mongoose.model('${name}', ${name}Schema);`;
  }