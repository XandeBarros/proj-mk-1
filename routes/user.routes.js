const express = require('express');
const UserController = require('../controllers/user.controller');

const router = express.Router();
const userController = new UserController();

let weight_buffer = -1;
let json;

const currentExercisePOST = (req, res) => {
  const { weight } = req.body;

  weight_buffer = weight;
  json = `{"weight": ${weight_buffer}}`;

  res.json(JSON.parse(json));
}

const currentExerciseGET = (req, res) => {
  const weight = Number(weight_buffer);
  if (!isNaN(weight)) {
    res.json({ weight });
  } else {
    res.status(500).json({ message: "Error: weight_buffer is not a valid number" });
  }
}

router.get('/ce', currentExerciseGET);
router.get('/', userController.getAll);
router.post('/', userController.add);
router.get('/:id', userController.getOne);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
router.post('/ce', currentExercisePOST);

// Login Section

router.post('/login', userController.login);

module.exports = router;
