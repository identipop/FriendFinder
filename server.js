// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// =============================================================

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000 ;
// =============================================================

// Sets up BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use (bodyParser.text());
app.use (bodyParser.json ({type: "application/vnd.api+json"}));
// =============================================================

// Routing
require('.routing/apiRoutes')(app);
require('.routing/htmlRoutes')(app);
// =============================================================
// Listener
app.listen(PORT, function(){
  console.log ("App listening on PORT: " + PORT);
});
