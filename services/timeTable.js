const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(campus) {

 
    const bjLecturers = await db.query(
        `SELECT lectDept, lectName
    FROM bjLecturers`
    );
    const bjSubjects = await db.query(
        `SELECT subjectCode, subjectName
    FROM bjSubjects`
    );

    const bjSubjectsTime = await db.query(
        `SELECT subjectCode, monday, tuesday, wednesday, thursday, friday 
    FROM bjSubjectsTime`
    );

    const saLecturers = await db.query(
        `SELECT lectDept, lectName
    FROM saLecturers`
    );
    const saSubjects = await db.query(
        `SELECT subjectCode, subjectName
    FROM saSubjects`
    );

    const saSubjectsTime = await db.query(
        `SELECT subjectCode, monday, tuesday, wednesday, thursday, friday 
    FROM saSubjectsTime`
    );
    
    const bjSubjectsData = helper.emptyOrRows(bjSubjects);
    const bjLecturersData = helper.emptyOrRows(bjLecturers);
    const bjTimeData = helper.emptyOrRows(bjSubjectsTime);

    const saSubjectsData = helper.emptyOrRows(saSubjects);
    const saLecturersData = helper.emptyOrRows(saLecturers);
    const saTimeData = helper.emptyOrRows(saSubjectsTime);
    
    
        return {
            "bj" :{
                bjSubjectsData,
                bjLecturersData,
                bjTimeData
            },
            "sa" :{
                saSubjectsData,
                saLecturersData,
                saTimeData
            }
        }
    
 
       

  
}

module.exports = {
    getMultiple
}