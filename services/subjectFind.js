const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getSubjectDetails(campus, code) {


    let subjectsTime = await db.query(
        `SELECT *
        FROM ${campus}SubjectsTime
         RIGHT JOIN ${campus}Subjects
          ON ${campus}SubjectsTime.subjectCode = ${campus}Subjects.subjectCode
       WHERE ${campus}SubjectsTime.subjectCode = '${code}';`
    );



    if (subjectsTime.length <= 0) {
        subjectsTime = {message: "Subject is not available here"}
    }

    return {



        subjectsTime

    }


}


module.exports = {
    getSubjectDetails,

}