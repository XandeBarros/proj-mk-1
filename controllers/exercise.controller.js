const exercise = require('../models/exercise.model');
const mongoose = require('mongoose');

class ExerciseController {
  getAll = (req, res) => {
    exercise.find()
      .then(docs => { return res.status(200).send(docs); })
      .catch(err => { return res.status(500).send({ message: 'Internal Server Error' }); });
  }

  add = (req, res) => {
    const body = req.body;
    exercise.create(body)
      .then(doc => { return res.status(201).send(doc); })
      .catch(err => { return res.status(500).send({ message: 'Internal Server Error' }); });
  }

  getOne = (req, res) => {
    const { id } = req.params;
    exercise.findById({ _id: new mongoose.Types.ObjectId(id) })
      .then(exer => { return res.status(200).send(exer); })
      .catch(err => { return res.status(500).send({ message: 'Error' }); });
  }

  update = (req, res) => {
    const { id } = req.params;
    const body = req.body;
    exercise.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, body)
      .then(exer => { return res.status(200).send(exer); })
      .catch(err => { return res.status(500).send({ message: `${err}` }); });
  }

  delete = (req, res) => {
    const { id } = req.params;
    exercise.findByIdAndDelete({ _id: new mongoose.Types.ObjectId(id) })
      .then(exer => { return res.status(200).send('Exercise deleted'); })
      .catch(err => { return res.status(500).send({ message: `${err}` }); });
  }
}

module.exports = ExerciseController;