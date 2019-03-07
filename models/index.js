const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
    defaulValue: 'Placeholder'
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: { notEmpty: true },
    defaulValue: 'Placeholder'
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isEmail: true },
  }
});
/*
const Temp = db.define('temp', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});
*/
module.exports = { db };
