const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const subSchema = new Schema({
  exercise_id: { type: objectId, ref: 'exercise' },
  weight: { type: Number },
})

const userSchema = new Schema({
  _id: { type: objectId, auto: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, require: true },

  exercise: [subSchema],
  updated: { type: Date, default: Date.now },
}, {
  versionKey: false,
});

const user = mongoose.model('users', userSchema);

module.exports = user;
