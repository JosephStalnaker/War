const { db } = require("./db");
const app = require("./app");
const Port = process.env.Port || 8080;
const seed = require("../script/seed");
require("dotenv").config();

const initialize = async () => {
  try {
    if (process.env.SEED === "true") {
      await seed();
    } else {
      await db.sync();
    }
    app.listen(Port, () => console.log(`Running on port ${Port}`));
  } catch (ex) {
    console.log(ex);
  }
};

initialize();
