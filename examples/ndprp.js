/**
 * There’s a tree structured as nested ul/li.
 * Write the code that for each <li> shows:
 * 1.What’s the text inside it (without the subtree)
 * 2.The number of nested <li> – all descendants, including the deeply nested ones.
 */

function a(){
    for(let li of document.querySelectorAll('li')){
        let title = li.firstChild.data;
    }

}