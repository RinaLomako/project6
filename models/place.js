const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  title: { type: String, required: true},
  description: { type: String, requires: true},
  imageUrl: {type: String, required: true},
  userId: {type: String, reauired: true},
  price: {type: Number, reauired: true},
});


//commentaire:
