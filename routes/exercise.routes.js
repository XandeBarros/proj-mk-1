const express = require('express');
const ExerciseController = require('../controllers/exercise.controller');

const router = express.Router();
const exerciseController = new ExerciseController();

router.get('/', exerciseController.getAll);
router.post('/', exerciseController.add);
router.get('/:id', exerciseController.getOne);
router.put('/:id', exerciseController.update);
router.delete('/:id', exerciseController.delete);

module.exports = router;
