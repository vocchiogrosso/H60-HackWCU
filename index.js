const expressEdge = require("express-edge");
const express = require("express");
const edge = require("edge.js");

const homePageController = require('./controllers/homePage')

const app = new express();
const port = 3012;

app.use(express.static("public"));
app.use(expressEdge);
app.set("views", `${__dirname}/views`);

app.get('/',homePageController);

// Run On Port
app.listen(process.env.PORT || port, () => {
  console.log("App is live at: http://localhost:"+port+"/");
});