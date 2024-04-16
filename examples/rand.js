/**
 * The built in function Math.random() creates a random value from 0 to 1(not including 1)
 * Write the function random(min, max) to generate a random integer (remove the Math.round() for the floats) from min to max(not including max)
 */


function random(min, max){

    while(true){
        let a = Math.random();
        let tot = max*a;
        if(tot >= min){
            alert((Math.round(tot)));  //this way 
        }
    }
}

random(99999999, 10000000000);