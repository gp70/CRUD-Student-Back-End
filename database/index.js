const db = require('./database');
const Student = require('./models/Student');
const Campus = require('./models/Campus');

//Setting up relations
Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {db, Student,Campus};