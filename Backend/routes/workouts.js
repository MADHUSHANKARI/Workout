const express = require('express')
const {createWorkout,getWorkouts,getWorkout,deleteworkout,updateworkout} = require('../controllers/workoutController')

const router = express.Router()

//get all workout
router.get('/', getWorkouts)
//get a single workout
router.get('/:id',getWorkout)
//POST a new workout
router.post('/', createWorkout)
//DELETE a new workout
router.delete('/:id',deleteworkout)
 //UPDATE a new workout
router.patch('/:id',updateworkout)
 
 
module.exports = router