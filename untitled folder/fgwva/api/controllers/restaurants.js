/**
 * Created by fabianwiilliams on 6/30/15.
 */

var request = require("request");

module.exports = {
    getRestaurants: getRestaurants
}

function getRestaurants (req, res) {
    request("http://api.usergrid.com/jahmekyanbwoy/sandbox/restaurants?limit=30&sort=name",
    function(err, resp, body) {
        //one way to handle it is
        //body = JSON.parse(body).entities;
        //end first way - the above way is not a good best practice
        //second way to make this work is
        var results = {};
        results.entities = JSON.parse(body).entities;
        results.count = results.entities.length;
        //end second way
        //res.send(body) -- the second way mandates we change this
        res.send(results)
    });
}