const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('app/public'));
//import apiRoute and htmlRoute
const apiRoute = require("./app/routing/apiRoutes")(app);
const htmlRoute = require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});