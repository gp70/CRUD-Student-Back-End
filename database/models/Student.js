const db = require('../database');
const Sequelize = require('sequelize');

const Student = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gpa: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  }

});

module.exports = Student;