// business.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  person_name: {
    type: String
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  email: {
    type: String
  }
},{
    collection: 'business'
});

module.exports = mongoose.model('Business', Business);
