const homeRoute = require("./homeRouter/home.router.js");
function route(app) {
  app.use("/api", homeRoute);
}
module.exports = route;
