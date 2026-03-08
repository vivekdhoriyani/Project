const Booking = require('../models/Booking');
const Property = require('../models/Property');
const mongoose = require('mongoose');

exports.createBooking = async (req, res, next) => {
  try {
    const { property, checkIn, checkOut, guests } = req.body;

    if (!property) {
      return res.status(400).json({ success: false, message: 'Property ID is required' });
    }

    if (!mongoose.Types.ObjectId.isValid(property)) {
      return res.status(400).json({ success: false, message: 'Invalid property ID format' });
    }

    const propertyDoc = await Property.findById(property);
    if (!propertyDoc) {
      return res.status(404).json({ success: false, message: 'Resource not found' });
    }

    const overlappingBooking = await Booking.findOne({
      propertyId: property,
      status: { $ne: 'cancelled' },
      $or: [
        { startDate: { $lte: new Date(checkOut) }, endDate: { $gte: new Date(checkIn) } }
      ]
    });

    if (overlappingBooking) {
      return res.status(400).json({ success: false, message: 'Property already booked for these dates' });
    }

    const days = Math.ceil((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24));
    const totalPrice = days * propertyDoc.price;

    const booking = await Booking.create({
      userId: req.user._id,
      propertyId: property,
      startDate: checkIn,
      endDate: checkOut,
      guests,
      totalPrice
    });

    await booking.populate('propertyId', 'name title location price');
    res.status(201).json({ success: true, data: booking });
  } catch (error) {
    next(error);
  }
};

exports.getUserBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find({ userId: req.user._id })
      .populate('propertyId', 'name title location price images')
      .sort('-createdAt');
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    next(error);
  }
};

exports.getBookingById = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate('userId', 'name email')
      .populate('propertyId', 'name title location price images');

    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    if (booking.userId._id.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Access denied' });
    }

    res.status(200).json({ success: true, data: booking });
  } catch (error) {
    next(error);
  }
};

exports.getAllBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find()
      .populate('userId', 'name email')
      .populate('propertyId', 'title location price')
      .sort('-createdAt');
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    next(error);
  }
};

exports.updateBookingStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    ).populate('propertyId', 'name title location');

    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    res.status(200).json({ success: true, data: booking });
  } catch (error) {
    next(error);
  }
};

exports.cancelBooking = async (req, res, next) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    if (booking.userId.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ success: false, message: 'Access denied' });
    }

    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Booking cancelled successfully' });
  } catch (error) {
    next(error);
  }
};
