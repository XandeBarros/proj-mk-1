const user = require('../models/user.model');
const mongoose = require('mongoose');

class UserController {
  getAll = (req, res) => {
    user.find()
      .then(docs => { return res.status(200).send(docs); })
      .catch(err => { return res.status(500).send({ message: 'Internal Server Error' }); });
  }

  add = (req, res) => {
    const body = req.body;
    user.create(body)
      .then(doc => { return res.status(201).send(doc); })
      .catch(err => { return res.status(500).send({ message: 'Internal Server Error' }); });
  }

  getOne = (req, res) => {
    const { id } = req.params;
    user.findById({ _id: new mongoose.Types.ObjectId(id) })
      .then(exer => { return res.status(200).send(exer); })
      .catch(err => { return res.status(500).send({ message: 'Error' }); });
  }

  update = async (req, res) => {
    const { id } = req.params;
    const { exercise: exercise_body } = req.body;

    const { exercise } = await user.findById({ _id: new mongoose.Types.ObjectId(id) });
    exercise_body[0]._id = new mongoose.Types.ObjectId(exercise_body[0]._id);
    let aux = 0;

    let newExer = exercise.map(exec => {
      if (String(exec._id) !== String(exercise_body[0]._id)) {
        console.log('diferente');
        aux++;
      }

      if (String(exec._id) === String(exercise_body[0]._id)) {
        console.log('engual');
        exec.weight = exercise_body[0].weight;
      }
    });

    if (aux === exercise.length) {
      newExer = [...exercise, ...exercise_body];
    } else {
      newExer = exercise
    }

    console.log({ exercise: newExer });
    const userRes = await user.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, { exercise: newExer }, { new: true });

    res.status(201).send(userRes);
  }

  delete = (req, res) => {
    const { id } = req.params;
    user.findByIdAndDelete({ _id: new mongoose.Types.ObjectId(id) })
      .then(exer => { return res.status(200).send('Exercise deleted'); })
      .catch(err => { return res.status(500).send({ message: `${err}` }); });
  }

  // Login Method

  login = (req, res) => {
    const { email, password } = req.body;
    user.findOne({ email })
      .then(user => {
        if (user.password !== password) {
          return res.json("Senha incorreta")
        }

        res.json(user);
      })
  }
}

module.exports = UserController;
