const homeRoute = require("./homeRoutes/home.routes.js");
function route(app) {
  app.use("/api", homeRoute);
}
module.exports = route;
