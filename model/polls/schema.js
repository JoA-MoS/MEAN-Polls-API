const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionSchema = new Schema({
  optionText: { type: String, required: true },
  votes: { type: Number, default: 0 }
});

const pollSchema = new Schema({
  questionText: { type: String, required: true },
  options: [optionSchema],
  user: { type: String }
}, { timestamps: true });


module.exports = mongoose.model('Polls', pollSchema);
