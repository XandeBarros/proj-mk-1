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

  update = (req, res) => {
    const { id } = req.params;
    const body = req.body;
    user.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id) }, body)
      .then(exer => { return res.status(200).send(exer); })
      .catch(err => { return res.status(500).send({ message: `${err}` }); });
  }

  delete = (req, res) => {
    const { id } = req.params;
    user.findByIdAndDelete({ _id: new mongoose.Types.ObjectId(id) })
      .then(exer => { return res.status(200).send('Exercise deleted'); })
      .catch(err => { return res.status(500).send({ message: `${err}` }); });
  }
}

module.exports = UserController;
