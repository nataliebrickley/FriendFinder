const path = require("path");

const friends = require("../data/friends")
module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        //display a JSON of all possible friends
        res.json(friends)
    })
    app.post("/api/friends", (req, res) => {
        //handle incoming survey results
        //console.log(req.body)
        friends.push(req.body);
        res.json(true);
    })
}