const router = require("express").Router();
const Workout = require("../models/workout.js");
const mongojs = require("mongodb");

//getting workout
router.get("/api/workouts", (req,res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
})

//add excercise
router.put("/api/workouts/:id", (req,res) => {
  const id = mongojs.ObjectId(req.params.id)
  Workout.findByIdAndUpdate( id, {$push: {exercises: req.body} }, {new:true}, (err, data) => {
    if (err) {
      console.log(err)
    }
    res.json(data);
  });
});


//Create a workout
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//get workout in range
router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    }
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


module.exports = router;



/*
//get workout in range
router.get("/api/workouts/range", (req,res) => {
  Workout.find({})
  .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
})
*/