const express = require('express');
const {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty
} = require('../controllers/propertyController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.route('/')
  .get(getAllProperties)
  .post(protect, authorize('admin'), createProperty);

router.route('/:id')
  .get(getPropertyById)
  .put(protect, authorize('admin'), updateProperty)
  .delete(protect, authorize('admin'), deleteProperty);

module.exports = router;
