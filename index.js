//Bonus: take in state and city as arguments instead of hardcoding

var city = "Manitou Springs"
var state = "CO"
var fixedCity = city.replace(" ", "_");

//Require apiKey

var apiKey = require("./env.js");

//Require the request library

var request = require("request");
//What is the `request` library you ask?

var apiUrl = "http://api.wunderground.com/api/" + apiKey + "/conditions/q/" + state + "/" + city + ".json";

//The actual request sending

request(apiUrl, function (error, response, body) {
  console.log(apiUrl);
  //Inside that callback
  // console.log(response);

  var parsedObject = JSON.parse(body);
  // console.log("The weather in " + city + ", " + state + " is " + parsedObject.current_observation.weather);
  console.log("The weather in " + city + ", " + state + " is " + JSON.parse(body).current_observation.weather);

  //Print out the weather result

});
