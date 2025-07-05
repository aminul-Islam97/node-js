const express = require('express');
const router = express.Router();
const Person = require('./../models/person');


//get
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fatched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


//post
router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  }
  
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//put
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;

    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("data updated");
    res.status(200).json(data);
  } 
  
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//delete

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;

    const response = await Person.findByIdAndDelete(personId);

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }

    console.log("person deleted Successfully");
    res.status(200).json(data);
  } 
 
  catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;