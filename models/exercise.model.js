const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const exerciseSchema = new Schema({
  _id: { type: objectId, auto: true },
  name: { type: String, required: true },
  // image etc...

  updated: { type: Date, default: Date.now },
}, {
  versionKey: false,
});

const exercise = mongoose.model('exercises', exerciseSchema);

module.exports = exercise;
