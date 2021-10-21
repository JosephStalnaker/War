const { db } = require("./db");
const Port = process.env.Port || 8080;
const app = require("./app");
const seed = require("../script/seed");

const initialize = async () => {
  try {
    if (process.env.SEED === "true") {
      await seed();
    } else {
      await db.sync();
    }
    app.listen(PORT, () => console.log(`Running on port ${Port}`));
  } catch (ex) {
    console.log(ex);
  }
};

initialize();
