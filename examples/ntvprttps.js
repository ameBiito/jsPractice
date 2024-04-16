/**
 * Add to the prototype of all functions the method defer(ms), that runs the function after ms milliseconds.
 */

/*Function.prototype.defer = function (ms){
    setTimeout(this , 1000);
}
*/
function f() {
    alert("Hello!");
  }
  
  

/**
 * Add to the prototype of all functions the method defer(ms), that returns a wrapper, delaying the call by ms milliseconds.
 * Please note that the arguments should be passed to the original function.
 */


Function.prototype.defer = function(ms){
    let func = this;
    return function(...args){
        setTimeout(() => func.apply(this, args), ms ); // if the wrapper function is called as an object method, then "this" is passed to the orginal method func 
    }
};

function betterDefer(ms){
    return (function(...args){
        setTimeout(() => this(...args), ms);
    }).bind(this);
}


function f(a, b) {
    alert( a + b );
  }
  


/**
 * There’s an object dictionary, created as Object.create(null), to store any key/value pairs.
 * Add method dictionary.toString() into it, that should return a comma-delimited list of keys.
 * Your toString should not show up in for..in over the object.
 */
/*
let dictionary = Object.create(null);

dictionary.toString = function(){      // this is not wrong, i just misunderstood the assignment
    let arr = Object.keys(this);
    let arr2 = [];                
    for(let elem of arr){
        arr2.push(this[elem]);
    }
    let str = arr2.join();
    return str;
}
Object.defineProperty(dictionary, "toString", {
    enumerable: false,
});
*/
let dictionary = Object.create(null, {
    "toString": {
        value(){
            return Object.keys(this).join();
        }
    }

});

dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for(let key in dictionary) {
  alert(key); // "apple", then "__proto__"
}

// your toString in action
alert(dictionary); // "apple,__proto__"