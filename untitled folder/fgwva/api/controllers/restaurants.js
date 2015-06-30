/**
 * Created by fabianwiilliams on 6/30/15.
 */

var request = require("request");

module.exports = {
    getRestaurants: getRestaurants,
    getRestaurantsByID: getRestaurantsByID,
    getReviews: getReviews
}

function getRestaurants (req, res) {
    request("http://api.usergrid.com/jahmekyanbwoy/sandbox/restaurants?limit=30&sort=name",
    function(err, resp, body) {
        //one way to handle it is
        //body = JSON.parse(body).entities;
        //end first way - the above way is not a good best practice
        //second way to make this work is
        var results = {};
        results.restaurants = JSON.parse(body).entities;
        results.count = results.restaurants.length;
        //end second way
        //res.send(body) -- the second way mandates we change this
        res.send(results)
    });
}

function getRestaurantsByID (req, res) {
    var restID = req.swagger.params.id.value;
    request("http://api.usergrid.com/jahmekyanbwoy/sandbox/restaurants?ql=restID=" + restID,
        function(err, resp, body) {
            var results = {};
            results.restaurants = JSON.parse(body).entities;
            results.count = results.restaurants.length;
            res.send(results)
        });

}

function getReviews (req, res) {
    var restID = req.swagger.params.id.value;
    request("http://api.usergrid.com/jahmekyanbwoy/sandbox/reviews?ql=restID=" + restID,
        function(err, resp, body) {
            var results = {};
            results.restaurants = JSON.parse(body).entities;
            results.count = results.restaurants.length;
            res.send(results)
        });

}