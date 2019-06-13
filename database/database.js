const Sequelize = require('sequelize');
const db = new Sequelize('postgres://postgres:123@localhost:3030/Campus-Manager',{logging: false});
module.exports = db;