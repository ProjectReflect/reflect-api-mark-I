var express = require('express');

var api = express.Router();

var request = require("request");

var parseString = require('xml2js').parseString;

var mapsApiKey = process.env.mapsKey;
var origin = process.env.origin;
var destination = process.env.destination;

var userKey = process.env.userKey;

var error = function(err) {
      console.log('API call failed: ', err);
    };

api.get('/test', function(req, res) {
    res.send("You have connected successfully!");
});

api.get('/news', function(req, res) {
  if (req.userKey == userKey){
    var articles = [];

    var rp = require("request-promise");
    rp.get(encodeURI('https://news.google.com/news?output=rss'))
      .then(function (res) {
          var cleanedString = res.replace("\ufeff", "");
          parseString(cleanedString, function (err, result) {
              var list_of_associated_articles = (result.rss.channel[0].item);
              list_of_associated_articles.forEach(function (article) {
                  var parsed_article = {};
                  parsed_article.title = article.title[0];
                  parsed_article.publisher_url = article.link[0];
                  console.log(parsed_article);
                  articles.push(parsed_article);
                });
              
            });
        }).then(function(){
  		  res.send(JSON.stringify(articles));
  	  }).catch(function(e) {
          console.log (e);
    });
  }
  else {
      res.send(JSON.stringify({status: "Invalid Authentication Key"}));
  }
});

api.get('/eta', function(req, res){
    if (req.userKey == userKey){
      var request = require("request");
      var options = {
          uri : "https://maps.googleapis.com/maps/api/directions/json?mode=transit&origin="+encodeURI(origin)+"&destination="+encodeURI(destination)+"&key="+mapsApiKey,
          method : 'GET',
      };
     request(options, function(error,response,body){
           if (!error && response.statusCode == 200) {
              console.log(body); // Show the HTML for the Modulus homepage.
              res.send(body);
           }   
      }).on('error', function(err) {
        console.log(err);
        res.send(err);
      });
    }
    else {
      res.send(JSON.stringify({status: "Invalid Authentication Key"}));
    }
});
module.exports = api;
