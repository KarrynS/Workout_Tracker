const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
 day: {
     type: Date,
     default: Date.now
 },
 exercises: [
     {
        type: {
            type: String,
            trim: true,
            required: "Exercise type is required"
        }, 

        name: {
            type: String,
            trim: true,
            required: "Exercise name is required"
        },
        
        weight: {
            type: Number,
            trim: true, 
        },
        
        sets: {
            type: Number,
            trim: true, 
        },

        reps: {
            type: Number,
            trim: true, 
        },

        duration: {
            type: Number,
            trim: true, 
        },

        distance: {
            type: Number,
            trim: true, 
        }
     }]
}, 
{
    toJSON: {
        virtuals: true,
    },
}
);

WorkoutSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
