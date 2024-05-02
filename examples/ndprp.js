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


let elem = document.querySelector('[data-widget-name]'); // get element with attribute data-widget-name
alert(elem.dataset.widgetName); //get attribute value 



let links = document.querySelectorAll('a'); //gets all link elements (returns an iterable collection)
for(let link of links){
    let href = link.getAttribute('href');
    if(!href)continue;
    if(! href.includes('://')) continue;
    if(href.startsWith('https://internal.com')) continue;
    link.style.color = 'orange';
}