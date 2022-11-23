const express = require('express');
const router = express.Router();
const timeTable = require('../services/timeTable');
const types = require('../services/types')
const subjectFind = require('../services/subjectFind')

/* GET programming languages. */
router.get('/', async function (req, res, next) {
  try {
    res.json(await timeTable.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting subjects`, err.message);
    next(err);
  }
});

router.get('/subject', async function (req, res, next) {

  try {
    res.json(await timeTable.getMultiple(req.query.code));
  } catch (err) {
    console.error(`Error while getting subjects`, err.message);
    next(err);
  }


});



router.get('/:campus/:type', async function (req, res, next) {

  if (req.params.type == "lecturer") {
    try {
      res.json(await types.getLectsOnly(req.params.campus));
    } catch (err) {
      console.error(`Error while getting lecturers`, err.message);
      next(err);
    }

  } else if (req.params.type == "subject") {
    if (req.query.code != null) {
      try {
       
        res.json(await subjectFind.getSubjectDetails(req.params.campus, req.query.code));
      } catch (err) {
        console.error(`Error while getting subjects`, err.message);
        next(err);
      }

    } else {
      try {
        res.json(await types.getSubjectsOnly(req.params.campus));
      } catch (err) {
        console.error(`Error while getting subjects`, err.message);
        next(err);
      }

    }


  } else if (req.params.type == "time") {
    try {
      res.json(await types.getSubjectsTimeOnly(req.params.campus));
    } catch (err) {
      console.error(`Error while getting subjects time`, err.message);
      next(err);
    }
  } else {
    res.json({ message: "You didnt specify any type" })
  }

});







module.exports = router;