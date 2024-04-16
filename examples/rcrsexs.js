/**
 * Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
 * Make 3 solution variants:

 * 1. Using a for loop.
 * 2. Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
 * 3.Using the arithmetic progression formula.
    
 *P.S. Which solution variant is the fastest? The slowest? Why?
 *P.P.S. Can we use recursion to count sumTo(100000)?

 */

 function sumTo(n, a){
    if (a == undefined) a = prompt("Which one?");
    let sum = 0;

    switch(a){
        case "1":
            for(let i = n; i > 0; --i){
                sum += i;
            }
            return sum;
        case "2":
            return n == 1 ? 1 : n + sumTo(n-1, "2");  
        case "3":
            sum = (1 + n)*n/2;                      //arithmetic progression formula
            return sum;
        default:
            alert("sugma");
            return sum;
            
    }
 }


 /**
  * The factorial of a natural number is a number multiplied by "number minus one",
  * then by "number minus two", and so on till 1. The factorial of n is denoted as n!
  * The task is to write a function factorial(n) that calculates n! using recursive calls.
  * P.S. Hint: n! can be written as n * (n-1)! For instance: 3! = 3*2! = 3*2*1! = 6
  */

 function factorial(n){
    return n == 1 ? 1 : n*factorial(n-1);
 }


/**
 * Write a function fib(n) that returns the n-th Fibonacci number.
 * P.S. The function should be fast. The call to fib(77) should take no more than a fraction of a second.
 */

function fib(n){
    return n <= 1 ? n : fib(n-1) + fib(n-2);
    /**
     * fib(5) = fib(4) + fib(3)
     * fib(4) = fib(3) + fib(2)
     * ...
     */
}



/**
 * Write a function printList(list) that outputs list items one-by-one.
 * Make two variants of the solution: using a loop and using recursion.
 * What’s better: with recursion or without it?
 */


function recPrintList(list){
    alert(list.value);
    if(list.next() != null){
        recPrintList(list.next());
    }
    else return;
}

function lpPrintList(list){
    while(list.next() != null){
        alert(list.value)
        list = list.next();
    }
    return;
}


/**
 * Output a single-linked list from the previous task Output a single-linked list in the reverse order.
 * Make two solutions: using a loop and using a recursion.
 */

function lpRevPrintList(list){
    let arr = [];
    while(list){
        arr.push(list.value);
        list = list.next;
    }
    arr = arr.reverse()
    for(let elem of arr){
        alert(elem);
    }
}


/**
 * 
 * Here first we outupt what's inside, then, we output the current value
 */
function recRevPrintList(list){
    if(list.next){
        recRevPrintList(list.next)
    }
    alert(list.value);
}