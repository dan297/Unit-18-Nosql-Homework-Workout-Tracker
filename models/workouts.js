const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    //for most recent
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        name: {
          type: String,
          trim: true,
          required: "Enter a name for the exercise",
        },
        type: {
          type: String,
          trim: true,
          required: "Enter a type for the exercise",
        },
        duration: {
            type: Number,
            trim: true,
            required: "Enter the exercise duration in minutes",
          },
        },
    ],
  });

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
