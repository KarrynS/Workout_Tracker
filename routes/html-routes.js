const path = require("path");
const { ppid } = require("process");

module.exports = function(app) {
    app.get("exercise", function(req,res) {
        res.sendFile(path.join(__dirname, "..pubic.exercise.html"));
    });

    app.get("/stats", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
}