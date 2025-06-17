'use strict'

const userBirthday = '2009-08-19'

function ageValidation(age){
    const validAge = 14 * 365 * 24 * 60 * 60 * 1000;
    const userAge = new Date(age)
    const nowDate = new Date();
    return nowDate - userAge > validAge
}


console.log(ageValidation(userBirthday));