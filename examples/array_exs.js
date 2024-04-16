/**
 * 
 *   Create an array styles with items “Jazz” and “Blues”.
 *   Append “Rock-n-Roll” to the end.
 *   Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
 *   Strip off the first value of the array and show it.
 *   Prepend Rap and Reggae to the array.
 */


function yui() {let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor(styles.length / 2)] = "Classics";
alert(styles.shift());
styles.unshift("Rap", "Raggae");
alert(styles);}



/**
 * Write the function sumInput() that:
 *
 *    Asks the user for values using prompt and stores the values in the array.
 *    Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
 *    Calculates and returns the sum of array items.
 *
 *   P.S. A zero 0 is a valid number, please don’t stop the input on zero.
 */


function sumInput(){

    let val = [];
 
    while(true){
        let a = +prompt("Enter a valid number", 0);
        if(!isFinite(a))break;
        val.push(+a);
    }

    let tot = 0; 
    for(let number of val){
        tot += number;
    }
    return tot;
}



/**
 * The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

*  The task is: find the contiguous subarray of arr with the maximal sum of items.

*  Write the function getMaxSubSum(arr) that will return that sum.

*  If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:
 */


function getMaxSubSum(arr){
    let globalMax = 0;
    for(let i = 0; i < arr.length; ++i){
        if(arr[i]<0) continue;
        let localMax = arr[i];
        if(localMax >= globalMax) globalMax = localMax;
        for(let j = i+1; j<arr.length; ++j){
            localMax += arr[j];
            if(localMax >= globalMax) globalMax = localMax;
        }
    }
    return globalMax;
}

function betterGetMaxSubSum(arr){
    let maxSum = 0;
    let partialSum = 0;

    for(let item of arr){
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if(partialSum < 0) partialSum = 0;
    }
    return maxSum;
}




  
let arr = [ 1, 15, 2 ];
  
arr.sort((a, b) => a-b);
  
alert(arr); 