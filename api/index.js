const router = require('express').Router();

router.use('/students', require('./routes/students'));
router.use('/campuses', require('./routes/campuses'));
module.exports = router;