/**
 * Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch
 */

async function loadJson(url){
    try{
        let response = await fetch(url);
        if(response.status == 200){
            let json = await response.json();
            return json;
        } 
        throw new Error(response.status);

    } catch(err) {
        alert(err.message);
    }
}