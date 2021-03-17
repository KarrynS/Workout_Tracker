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

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

/*
* As a user, I want to be able to 
view create and track daily workouts. 
I want to be able to log multiple exercises in a workout on a given day. 
I should also be able to track the name, type, weight, sets, reps, and duration of exercise. 
If the exercise is a cardio exercise, I should be able to track my distance traveled.
*/