/**
 * Write the destructuring assignment that reads:

 *   name property into the variable name.
 *   years property into the variable age.
 *   isAdmin property into the variable isAdmin (false, if no such property)

 */


let user = {
    name: "John",
    years: 30
  };
/*
let {name, years: age, isAdmin = false} = user;

alert(age);
*/




/**
 * Create the function topSalary(salaries) that returns the name of the top-paid person.
 * If salaries is empty, it should return null.
 * If there are multiple top-paid persons,return any of them.
 * P.S. Use Object.entries and destructuring to iterate over key/value pairs.
 */


function topSalary(salaries){
    let max = 0;
    let maxName = null;
    for(let [name, salary] of Object.entries(salaries)){
        if(salary > max) {
            max = salary;
            maxName = name;
        }
    }
    return maxName;
}

function betterTopSalary(salaries){
    return Object.keys(salaries).reduce((max, s) => salaries[max] > salaries[s] ? max : s);
}


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert(topSalary(salaries));