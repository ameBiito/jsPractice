/**
 * Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch
 */
/*
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
*/


/**
 * Below you can find the “rethrow” example. Rewrite it using async/await instead of .then/catch.
 * And get rid of the recursion in favour of a loop in demoGithubUser: with async/await that becomes easy to do.
 */


class HttpError extends Error {
    constructor(response){
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}
async function loadJson(url){
    let response = await fetch(url);
    if(response.status == 200){
        let json = await response.json();
        return json;
    }
    throw new HttpError(response);
}


async function demoGithubUser(){
    let user;
    while(true){
        let name = prompt("Enter a name", "ameBiito");
        try{
            user = await loadJson(`https://api.github.com/users/${name}`)
            break;
        } catch(err) {
            if(err instanceof HttpError && err.response.status == 404){
                alert("No such user, please reenter"); // -> the loop continues after this OwO
            } else {
                throw err;
            }
        }
    }
    alert(`Full name: ${user.name}`);
    return user;
}