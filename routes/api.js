const router = require("express").Router();
const Workout = require("../models/workouts.js");

//addExercise
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } })
    .then((dbRes) => {
      res.json(dbRes);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});
//createWorkout
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then((dbRes) => {
      res.json(dbRes);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});



module.exports = router;
