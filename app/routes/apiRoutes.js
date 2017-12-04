var pupperData = require("../data/puppers");
var path = require("path");
var intersection = require('array-intersection');


module.exports = function(app) {

  app.get("/api/puppers", function(req, res) {

    res.json(pupperData);


  });



  app.post("/api/puppers", function(req, res) {


    req.body.scores = req.body.scores.map(Number);

    var scoresarrays = pupperData.map(a => a.scores);

    var pupperInput = req.body;
    var pupperScores = pupperInput.scores;

    var matchName = '';
    var matchImage = '';




    function intersect(a, b) {
      var d = {};
      var results = [];
      for (var i = 0; i < b.length; i++) {
        d[b[i]] = true;
      }
      for (var j = 0; j < a.length; j++) {
        if (d[a[j]])
          results.push(a[j]);
      }
      return results;
    }

  


    var lengths = [];
    for (var x = 0; x < scoresarrays.length; x++) {
      var intersections = intersect(pupperScores, scoresarrays[x]);
      lengths.push(intersections.length);
    }





    var indexMax = indexOfMax(lengths);




    function indexOfMax(arr) {
      if (arr.length === 0) {
        return -1;
      }

      var max = arr[0];
      var maxIndex = 0;

      for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
        }
      }

      return maxIndex;
    }

    matchName = pupperData[indexMax].name;
    matchImage = pupperData[indexMax].photo;

    pupperData.push(pupperInput);
    return res.json({
      status: "OK",
      matchName: matchName,
      matchImage: matchImage
    });

  });


};
