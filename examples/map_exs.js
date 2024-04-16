/**
 * Let arr be an array.
 * Create a function unique(arr) that should return an array with unique items of arr.
 * P.S. Here strings are used, but can be values of any type.
 * P.P.S. Use Set to store unique values.
 */

function unique(arr){
    let set = new Set();
    let uArr = [];
    let index = 0;
    for(elem of arr){
        set.add(elem);
    }
    for(elem of set){
        uArr[index] = elem;
        ++index;
    }
    return uArr;
}

function betterUnique(arr){
    return Array.from(new Set(arr));
}


  
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  


/**
 * Write a function aclean(arr) that returns an array cleaned from anagrams.
 * From every anagram group should remain only one word, no matter which one.
 */


function sortString(str){
    let MAX_CHAR = 26;
        let charCount = new Array(MAX_CHAR);
        charCount.fill(0);
        for(let i = 0; i < str.length; i++){
            charCount[str[i].charCodeAt()-'a'.charCodeAt()]++;
        }
        for(let i = 0; i < MAX_CHAR; i++){
            for(let j = 0; j < charCount[i]; j++){
                document.write(String.fromCharCode('a'.charCodeAt()+i) );
            }
        }
}

function aclean(arr){

    let copy = new Map();
    for(let i = 0; i < arr.length; i++){
        let tmp = arr[i].sortString()
        if(!copy.has(tmp)) copy.set(tmp, i);
    }
    
}

function betterAclean(arr){  //not necessairly better, i just didn't know some methods and how to wrap final value, the reasoning was there :D
    let map = new Map();
    for(let word of arr){
        let sorted = word.toLowerCase().split(" ").sort().join(" ");
        map.set(sorted, word);
    }
    return Array.from(map.values());
}






