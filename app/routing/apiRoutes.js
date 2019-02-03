//import friend data
let friends = require("../data/friend.js");


module.exports = function (app) {


    app.get("/api/friendList", function (req, res) {
        res.json(friends);
    });
    //add new data that determines the least differences between the input and the users in the friendData array
    app.post("/api/friendList", function (req, res) {
        const friend = req.body;
        let minDiff = 1500;

        console.log(friend);
        console.log(friend.scores);
        let suitName = " ";
        let suitPhoto = " ";
        for (let i = 0; i < friends.length; i++) {
            let difference = 0;

            for (let j = 0; j < friend.scores.length; j++) {
                difference += Math.abs(parseInt(friends[i].scores[j]) - parseInt(friend.scores[j]));
            }
            console.log('difference', difference)
            if (difference < minDiff) {
                minDiff = difference;
                suitName = friends[i].name;
                suitPhoto = friends[i].photo;
            }
            console.log(suitName, suitPhoto)
        }
        console.log(suitName);
        console.log(suitPhoto);
        //put through the ok and the pass the suitName and suitPhoto value
        res.json({
            ok: true,
            suitName: suitName,
            suitPhoto: suitPhoto
        })
        friends.push(friend);
    });
}