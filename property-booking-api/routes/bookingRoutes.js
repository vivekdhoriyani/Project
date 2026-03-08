const express = require('express');
const {
  createBooking,
  getUserBookings,
  getAllBookings,
  getBookingById,
  updateBookingStatus,
  cancelBooking
} = require('../controllers/bookingController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.post('/', protect, createBooking);
router.get('/my-bookings', protect, getUserBookings);
router.get('/all', protect, authorize('admin'), getAllBookings);
router.get('/:id', protect, getBookingById);
router.put('/:id', protect, authorize('admin'), updateBookingStatus);
router.delete('/:id', protect, cancelBooking);

module.exports = router;
