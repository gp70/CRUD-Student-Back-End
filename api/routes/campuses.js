const router = require('express').Router();
const {Campus} = require('../../database');

router.get('/', async (req,res, next) =>{
  try{
    const allCampuses = await Campus.findAll();
    res.send(allCampuses);
  } catch(error){
    next(error);
  }
});

router.get('/:id', async (req,res,next)=>{
  try{
    const campus = await Campus.findByPk(req.params.id)
    res.send(campus);
  } catch(error){
    next(error);
  }
});


//Generating new data
router.post('/', async (req, res, next) => {
  try {
    const name = req.body.name;
    const imgUrl = req.body.imgUrl;
    const address = req.body.address;
    const description = req.body.description;
    const newCampus = await Campus.create({
      name,
      imgUrl,
      address,
      description,
    });
    res.send(newCampus);
  } catch (error) {
    next(error);
  }
});

module.exports = router;