const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getSubjectsTimeOnly(campus) {


    const subjectsTime = await db.query(
        `SELECT subjectCode, monday, tuesday, wednesday, thursday, friday
    FROM ${campus}SubjectsTime`
    );


    return {

        subjectsTime

    }


}

async function getLectsOnly(campus) {


    const lecturers = await db.query(
        `SELECT lectDept, lectName
    FROM ${campus}Lecturers`
    );


    return {

        lecturers

    }


}

async function getSubjectsOnly(campus) {


    const subjects = await db.query(
        `SELECT subjectCode, subjectName
    FROM ${campus}Subjects`
    );


    return {

        subjects,

    }


}

module.exports = {
    getSubjectsOnly,
    getSubjectsTimeOnly,
    getLectsOnly
}