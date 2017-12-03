var pupperData = require("../data/puppers");



module.exports = function(app) {

  app.get("/api/puppers", function(req, res) {
    res.json(pupperData);
  });


  app.post("/api/puppers", function(req, res) {
    pupperData.push(req.body);
    res.json(true);
  });



};
