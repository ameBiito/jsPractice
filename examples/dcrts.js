/**
 * Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.
 * Every call is saved as an array of arguments
 * .P.S. That decorator is sometimes useful for unit-testing. Its advanced form is sinon.spy in Sinon.JS library.
 */


function spy(func){
   
    function wrapper(...args){
        wrapper.calls.push(args);
        return func.apply(this, args);
    }

    wrapper.calls = [];

    return wrapper;
}

function work(a, b) {
    alert( a + b ); // work is an arbitrary function or method
  }
  
//work = spy(work);
  


/**
 * Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.
 * In other words, delay(f, ms) returns a "delayed by ms" variant of f.
 * In the code above, f is a function of a single argument, but your solution should pass all arguments and the context this.
 */


function delay(func, ms){
    
    return function(){                 // i can fix this by having a ...args to this function argument and adding an intermediate this variable 
        setTimeout(function(){
            func.apply(this, arguments);
        }, ms)
    };
}

function workingDelay(func, ms){

    return function(){
        setTimeout(() => func.apply(this, arguments), ms)  // being an arrow function, this is taken from the wrapper function
    };
}

function f(x) {
    alert(x);
  }
  


/**
 * Implement a debounce decorator, a decorator that allows calls to a function only ater a "cooldown" has passed
 */

function debounce(f, ms){
    debounce.delay = ms;
    let call_date = new Date();
    return function a(){
        if(debounce.delay == ms ){
            debounce.delay = 0;
            f.apply(this, arguments);
        } else {
            let tmp_date = new Date();
            while((tmp_date - call_date) <= ms){
                tmp_date = new Date();
            }
            debounce.delay = ms;
            a();
        }
        
    };
}

function workingDebounce(f, ms){
    let timeout;
    return function(){
        clearTimeout(timeout);
        timeout = setTimeout(() => f.apply(this, arguments), ms) 
    }
}



/**
 * Create a “throttling” decorator throttle(f, ms) – that returns a wrapper.
 * When it’s called multiple times, it passes the call to f at maximum once per ms milliseconds.
 * Compared to the debounce decorator, the behavior is completely different:
 * debounce runs the function once after the “cooldown” period. Good for processing the final result.
 * throttle runs it not more often than given ms time. Good for regular updates that shouldn’t be very often.
 * P.S. Arguments and the context this passed to f1000 should be passed to the original f.
 */


function throttle(f, ms){
    let isThrottled = false, 
        savedArgs,
        savedThis;
    
    function wrapper(){
        if(isThrottled){
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        isThrottled = true;

        f.apply(this, arguments);

        setTimeout(function(){
            isThrottled = false;
            if(savedArgs){
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    return wrapper;

}

function fa(a) {
    console.log(a);
  }
/*
  // f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(fa, 1000);
  
f1000(1); // shows 1
f1000(2); // (throttling, 1000ms not out yet)
f1000(3); // (throttling, 1000ms not out yet)
*/



/**
 * 
 * @param {function} ok 
 * @param {function} fail 
 */

function askPassword(ok, fail){
    let password = prompt("Passwd?", '');
    if(password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',
    login(result){
        alert(this.name + (result ? 'Logged in' : 'failed to log in') );
    }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));
askPassword(() => user.login(true), () => user.login(false)); // works this way as well 