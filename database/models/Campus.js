const db = require('../database');
const Sequelize = require('sequelize');

const Campus = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'This is a Campus'
  }

});

module.exports = Campus;