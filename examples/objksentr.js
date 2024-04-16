/**
 * There is a salaries object with arbitrary number of salaries.
 * Write the function sumSalaries(salaries) that returns the sum of
 * all salaries using Object.values and the for..of loop.If salaries is empty, then the result must be 0.
 */


function sumSalaries(salaries){
    let arr = Object.values(salaries);
    let sum = 0;
    for(let elem of arr){
        sum += elem;
    }
    return sum;
}

function goodSumSalaries(salaries){
    return Object.values(salaries).reduce((a,b) => (a+b), 0)
}


/**
 * Write a function count(obj) that returns the number of properties in the object:
 * Try to make the code as short as possible.
 * P.S. Ignore symbolic properties, count only “regular” ones.
 */

function count(obj){
    return Object.keys(obj).length;
}