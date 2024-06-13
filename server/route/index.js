const SecurityRoute = require("./SecurityRoute");
const StudentRoute = require("./StudentRoute");

module.exports = (app) => {
  app.use("/students", StudentRoute);
  app.use("/", SecurityRoute);
};
