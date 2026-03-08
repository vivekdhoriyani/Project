const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  title: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true
  },
  propertyType: {
    type: String,
    enum: ['apartment', 'house', 'villa', 'condo', 'studio'],
    default: 'apartment'
  },
  amenities: [{
    type: String
  }],
  images: [{
    type: String
  }]
}, { timestamps: true });

module.exports = mongoose.model('Property', propertySchema);
