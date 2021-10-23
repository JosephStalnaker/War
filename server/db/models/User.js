const Sequelize = require("sequelize");
const db = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SALT = 4;

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  wins: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  losses: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

//methods for instance
//compare non encrypted to encrypted password
User.prototype.correctPassword = function (submitedPassword) {
  return bcrpt.compare(submitedPassword, this.password);
};

User.prototype.generateToken = function () {
  return jwt.sign({ id: this.id }, process.env.JWT);
};

//Class methods
User.authenticate = async function ({ username, password }) {
  const user = await this.findOne({ where: { username } });
  if (!user || !(await user.correctPassword(password))) {
    const error = Error("Incorrect username or password");
    error.status = 401;
    throw error;
  }
  return user.generateToken;
};

User.findByToken = async function (token) {
  try {
    const { id } = await jwt.verify(token, process.env.JWT);
    const user = User.findByPk(id);
    if (!user) {
      throw "not user";
    }
  } catch (ex) {
    const error = Error("wrong token");
    error.status = 401;
    throw error;
  }
};

//Hook
const passwordHash = async (user) => {
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, SALT);
  }
};

User.beforeCreate(passwordHash);
User.beforeUpdate(passwordHash);
User.beforeBulkCreate((users) => Promise.all(users.map(passwordHash)));

module.exports = User;
