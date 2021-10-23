const {
  db,
  models: { User },
} = require("../server/db");

//seed database functionality
async function seedDatabase() {
  await db.sync({ force: true });
  console.log("Synced database");

  const users = await Promise.all([
    User.create({
      username: "joseph",
      password: "password",
      firstName: "Joseph",
      lastName: "Stalnaker",
      wins: 7,
      losses: 3,
    }),
    User.create({
      username: "silvia",
      password: "password1",
      firstName: "Silvia",
      lastName: "Miranda",
      wins: 4,
      losses: 6,
    }),
  ]);

  console.log(`Total users ${users.length} seeded`);

  return {
    users: {
      joseph: users[0],
      sivia: users[1],
    },
  };
}

//run seeding functionality
async function runSeedDatabase() {
  console.log("Seeding now...");
  try {
    await seedDatabase();
  } catch (error) {
    console.log(error);
    process.exitCode = 1;
  } finally {
    console.log("Closing database connection");
    await db.close();
    console.log("Closed database connection");
  }
}

if (module === require.main) {
  runSeedDatabase();
}

module.exports = runSeedDatabase;
