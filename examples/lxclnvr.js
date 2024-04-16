/**
 * Write function sum that works like this: sum(a)(b) = a+b.
 * Yes, exactly this way, using double parentheses (not a mistype).
 */

function sum(a){
    return function(b){
        return a+b;
    }
}


/**
 * We have a built-in method arr.filter(f) for arrays. It filters all elements through the function f. If it returns true, then that element is returned in the resulting array.

 * Make a set of “ready to use” filters:

        inBetween(a, b) – between a and b or equal to them (inclusively).
        inArray([...]) – in the given array.
 * The usage must be like this:
        arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
        arr.filter(inArray([1,2,3])) – selects only elements matching with one of the members of [1,2,3].
 */


function inBetween(a, b){
    return function(x){
        return x >= a && x <= b;  // you have to return a function because filter requires a function, not a value 
    };
}

function inArray(arr){
    return function(x){
        return arr.includes(x); 
        };
}


/**
 * We’ve got an array of objects to sort:
 * So, instead of writing a function, just put byField(fieldName).
 * Write the function byField that can be used for that.
 */


function byField(fieldName){
    return function(a, b){
        return a[fieldName] > b[fieldName] ? 1 : -1;  // [] are needed, i don't know why it doesn't work with the dot notation
    };
}

