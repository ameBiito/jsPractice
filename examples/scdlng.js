
/**
 * Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.
 * Make two variants of the solution.

    Using setInterval.
    Using nested setTimeout.


 */


function printNumbers1(from, to){
   let current = from;

   let timerId = setInterval(function(){
    alert(current);
    if(current == to){
        clearInterval(timerId);
    }
    ++current;
   }, 1000);
}

function printNumbers2(from, to){
    let tmp = from;
    setTimeout(function a(){
        alert(tmp);
        if(tmp < to){
           setTimeout(a, 1000);
        }
        ++tmp;      // it goes directly here because before starting a setTimeout(), the scheduler will finish the active script 
    }, 1000);
}

