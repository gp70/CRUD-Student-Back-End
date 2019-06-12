var express = require("express");

var {Pool, Client} = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '123',
  port: 3030
});

pool.query(`SELECT * FROM students`, (err,res) =>{
  console.log(err,res.rows);
  pool.end();
});
/*
var pg = require('pg');
pg.connect('postgres://postgres:123@localhost/postgres', function(err, client, done){
  client.query(`SELECT * FROM students`, function(err, result){
    console.log(result.rows);
    done();
    pg.end();
  });
});
*/


/*
var students = sequelize.define('student', {
  id: Sequelize.INTEGER,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  gpa: Sequelize.FLOAT
});
*/

var router = express();

router.get('/', function(req,res,next){
  res.send("API is working properly");
});

router.get('/students', function(req,res,next){
  res.send("Here is where we load Students");
});

router.get('/campuses', function(req,res,next){
  res.send("Here is where we load Campuses");
});

module.exports = router;