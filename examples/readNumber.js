/**
 * Create a funtion readNumber which prompts for a number until the visitor enters a valid numeric value
 * The resulting value must be returned as a number
 * The visitor can also stop the process by entering an empty line or pressing "CANCEL". In that case, the function should return null 
 */


function readNumber(){

   let a; 

   do{
    a = prompt("Enter a number", 0);
   }
   while( !isFinite(a) ){
    if(a === "" || a === null)return null; 
   }

   return +a;
}


let c  = readNumber();
alert(typeof(c));