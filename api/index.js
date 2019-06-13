const router = require('express').Router();


router.use('/students', require('./routes/students'));
router.use('/campuses', require('./routes/campuses'));

router.use('/', function(req,res,next){
  res.send('You are now in the API');
});
module.exports = router;