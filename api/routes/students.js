
const {Student} = require('../../database');
const router = require('express').Router();


//Viewing the information
router.get('/', async (req,res, next) =>{
  try{
    const allStudents = await Student.findAll();
    res.send(allStudents);
  } catch(error){
    next(error);
  }
});


//Getting a specific student
router.get('/:id', async (req,res,next)=>{
  try{
    const student = await Student.findByPk(req.params.id)
    res.send(student);
  } catch(error){
    next(error);
  }
});

//Deleting a student
router.delete('/:id',  async (req,res,next)=>{
  try{
    Student.destroy({
      where: {
        id: req.params.id
      }
    })
    console.log(`Successfully deleted Student ${req.params.id}`);
    res.send("Deleted Student!");
  } catch(error){
    next(error);
  }
});


//Updating Student Information
router.put('/:id', async (req,res,next)=>{
  try{
    Student.update(
      req.body,
      {returning: true, where: {id: req.params.id}}
    )
    .then(function([rowsUpdated,[updatedStudent]]){
      res.json(updatedStudent);
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


module.exports = router;
