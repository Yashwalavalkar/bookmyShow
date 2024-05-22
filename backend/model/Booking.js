const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookingSchema = new Schema({
  movie: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  seats: {
    a1: {
      type: String,
      default: '',
    },
    a2: {
      type: String,
      default: '',
    },
    a3: {
      type: String,
      default: '',
    },
    a4: {
      type: String,
      default: '',
    },
    d1: {
      type: String,
      default: '',
    },
    d2: {
      type: String,
      default: '',
    },
  },
});

module.exports = mongoose.model('Booking', BookingSchema);
