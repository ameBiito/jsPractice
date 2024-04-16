/**
 * Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
 *
 * The function must be case-insensitive:
 */


function checkSpam(str){

    let cStr = str.toLowerCase();

    if(cStr.includes("viagra") || cStr.includes("xxx")){
        return true;
    }
    return false;
}




/**
 * Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – 
 * replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
 * The result of the function should be the truncated (if needed) string.
 */

function truncate(str, maxLength){

    let tStr = "";
    if(str.length > maxLength){
        a:for(let i = 0; i<=maxLength; ++i){
            if(i == maxLength-1 ){
                tStr += "…";
                break a;
            }
            tStr += str[i];
        }

    }else return str;

    return tStr;
}

function truncateBetter(str, maxLength){
    return (str.length > maxLength) ?
        str.slice(0, maxLength-1) + "…" : str;
}





/**
 * We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.
 * Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.
 */


function extractCurrencyValue(str){
    return +str.slice(1);
}

alert(extractCurrencyValue("$120"));