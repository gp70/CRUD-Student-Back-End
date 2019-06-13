const router = require('express').Router();
const {Student} = require('../../database');

//Viewing the information
router.get('/', async (req,res, next) =>{
  try{
    const allStudents = await Student.findAll();
    res.send(allStudents);
  } catch(error){
    next(error);
  }
});

router.get('/:id', async (req,res,next)=>{
  try{
    const student = await Student.findByPk(req.params.id)
    res.send(student);
  } catch(error){
    next(error);
  }
});

router.delete('/:id', async (req,res,next)=>{
  try{
    const student = await Student.findByPk(req.params.id)
    res.send(student);
  } catch(error){
    next(error);
  }
});


router.update('/:id', async (req,res,next)=>{
  try{
    Student.findByPk(req.params.id)
    .then((student) =>{
      student.update({
        firstName: req.body.firstName,
        astName: req.body.lastName,
        gpa: req.body.gpa,
        email: req.body.email,
        imageURL: req.body.imageURL,
        campusId: req.body.campusId
      })
    });
  } catch(error){
    next(error);
  }
});

//Generating New Student
router.post('/', async (req, res, next) => {
  try {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const gpa = req.body.gpa;
    const imageURL = req.body.imageURL;
    const email = req.body.email;
    const campusId = req.body.campusId;
    const newStudent = await Student.create({
      firstName,
      lastName,
      gpa,
      email,
      imageURL,
      campusId
    });
    res.send(newStudent);
  } catch (error) {
    next(error);
  }
});


//Updating Information




module.exports = router;