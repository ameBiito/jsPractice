/**
 * Modify the code of makeCounter() so that the counter can also decrease and set the number:

    counter() should return the next number (as before).
    counter.set(value) should set the counter to value.
    counter.decrease() should decrease the counter by 1.

 * See the sandbox code for the complete usage example.

 * P.S. You can use either a closure or the function property to keep the current count. Or write both variants.
 */



function makeCounter() {

    function counter() {
        return counter.count++;
    };

    counter.set = function(value){
        counter.count = value;
    }
    counter.decrease = function(){
        counter.count--;
    }
      
    counter.count = 0;
      
    return counter;
}

/**
 * Write function sum that would work like this:
 * P.S. Hint: you may need to setup custom object to primitive conversion for your function.
 */

function sum(a){
    let currentSum = a;

    function f(b){
        currentSum += b;
        return f;          //you don't need an end condition, the function call doesn't exist if it isn't called :P
    }

    f.toString = function(){   //used for object(function) to primitive (Number) conversion 
        return currentSum;
    }

    return f;  // we return the function without calling it, so, there is no recursion 
}

alert(sum(1)(2)); // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
alert(sum(1));