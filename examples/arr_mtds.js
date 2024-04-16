/**
 * Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
 * That is: removes all dashes, each word after dash becomes uppercased.
 * P.S. Hint: use split to split the string into an array, transform it and join back.
 */

function camelize(str){
    let arr = str.split("-");
    let camelArr = arr.map((item) => item[0].toUpperCase() + item.slice(1, item.length))
    let gStr = camelArr.join("");
    let lGstr = gStr[0].toLowerCase() + gStr.slice(1, gStr.length);
    return lGstr;
}

function betterCamelize(str){
    return str
        .split("-")
        .map(
            (word, index) => index == 0 ? word: word[0].toUpperCase() + word.slice(1)
        )
        .join("");
}



/**
 * Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values
 * higher or equal to a and lower or equal to b and return a result as an array.
 * The function should not modify the array. It should return the new array. 
 */

function filterRange(arr, a, b){
    return arr.filter((item) => (item >= a && item <= b) );
}


/**
 * Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those
 * that are between a and b. The test is: a ≤ arr[i] ≤ b.
 * The function should only modify the array. It should not return anything.
 */

function filterRangeInPlace(arr, a, b){
    for(let i = 0;i < arr.length; ++i){
        if(arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--
        }
    }
}


/**
 * We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
 * Create a function copySorted(arr) that returns such a copy.
 */

function copySorted(arr){
    let copy = [];
    for(let i = 0; i < arr.length; ++i){
        copy[i] = arr[i];
    }
    return copy.sort();
}

function betterCopySorted(arr){
    return arr.slice().sort();
}



/**
 * Create a constructor function Calculator that creates “extendable” calculator objects.
 * The task consists of two parts.First, implement the method calculate(str) that takes a 
 * string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns 
 * the result. Should understand plus + and minus -.Then add the method addMethod(name, func) that 
 * teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.
 * For instance, let’s add the multiplication *, division / and power **:
 * No parentheses or complex expressions in this task.
 * The numbers and the operator are delimited with exactly one space.There may be error handling if you’d like to add it
 */


function Calculator(){

    this.methods = {
        "+": (a, b) => a+b,
        "-": (a, b) => a-b,
    };
    this.calculate = function(str){       
        let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = split[2];

        if(!this.methods[op] || isNaN(a) || isNaN(b)){
            return NaN;
        }

        return this.methods[op](a, b);
        
    };
    this.addMethod = function (namae, func){
        this.methods[namae] = func;
    };

}


/**
 * You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
 */


function mapToNames(arr){
    return arr.map((item) => item.name )
}


/**
 * You have an array of user objects, each one has name, surname and id.
 * Write the code to create another array from it, of objects with id and 
 * fullName, where fullName is generated from name and surname. 
 * So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.
 */

function mapToObj(arr){
    let copy = arr.map(
        (item) => ({id: item.id, fullName: `${item.name} ${item.surname}` })
    );
    return copy;
}



/**
 * Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
 */

function sortByAge(users){
    users.sort((a, b) => (a.age - b.age));
}


/**
 * Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
 * Multiple runs of shuffle may lead to different orders of elements.
 * All element orders should have an equal probability. For instance, [1,2,3] can be
 * reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
 */

function shuffle(arr){
    let rand = Math.floor(Math.random() * arr.length);
    let randArr = [];
    for(let i = 0; i < arr.length; ++i){
        if (randArr[rand] === undefined ) randArr[rand] = arr[i];
        else{ 
            rand = Math.floor(Math.random() * arr.length)
            --i;
        }
    }
    return randArr;
}

function betterShuffle(arr){
    arr.sort(() => Math.random - 0.5);
}


/**
 * Write the function getAverageAge(users) that gets an array of objects with property age and
 * returns the average age.
 * The formula for the average is (age1 + age2 + ... + ageN) / N.
 */

function getAverageAge(users){
    return( users.reduce((average, current) => average + current.age, 0) / users.length);
}


/**
 * Let arr be an array.
 * Create a function unique(arr) that should return an array with unique items(if there are duplicates, they're ignored) of arr.
 */


function unique(arr){
    let copy = [];
    
    for(let elem of arr){
        if(!copy.includes(elem)) copy.push(elem);
    }
    return copy;
}

function betterUnique(arr){
    return arr.filter((a, b) => arr.indexOf(a) === b);     //Checks the first occurence of element a and if b is different, it's filtered
}


/**
 * Let’s say we received an array of users in the form {id:..., name:..., age:... }.
 * Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
 * Such function is really handy when working with server data.
 * In this task we assume that id is unique. There may be no two array items with the same id.
 * Please use array .reduce method in the solution.
 */

function groupById(arr){
    return arr.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
    }, {});
}

