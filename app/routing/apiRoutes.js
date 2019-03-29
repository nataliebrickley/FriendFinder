const path = require("path");

const friends = require("../data/friends")
module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        //display a JSON of all possible friends
        res.json(friends)
    })
    app.post("/api/friends", (req, res) => {
        //handle incoming survey results
        let newFriend = req.body
        let bestMatch = [40, "name", "photo"]
        friends.forEach(person => {
            let totalDiff = 0 
            for(let i=0; i<person.scores.length; i++) {
                totalDiff += Math.abs(parseInt(person.scores[i]) - parseInt(newFriend.scores[i]))
            }
            if (totalDiff <= bestMatch[0]) {
                bestMatch[0] = totalDiff;
                bestMatch[1] = person.name;
                bestMatch[2] = person.photo;
            }   
        })

        //console.log(req.body)
        friends.push(req.body);
        res.json(bestMatch);
    })
}