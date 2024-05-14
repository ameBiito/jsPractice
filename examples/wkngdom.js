/**
 * There’s a tree structured as nested ul/li.
 * Write the code that for each <li> shows:
 * What’s the text inside it (without the subtree)
 * The number of nested <li>– all descendants, including the deeply nested ones.
 */

function po(){
    let lis = document.querySelectorAll('li');
    for(li in lis){
        let title = li.firstChild.data;
        title = title.trim();
        let count = getElementsByTagName('li');
        alert(`${title}:${count}`);
    }
}

/**
 * Write the code to select the element with data-widget-name attribute from the document and to read its value.
 */

function pu(){
    let elem = document.querySelector('[data-widget-name]');
    console.log(elem.dataset.widgetName);
}

/**
 * Make all external links orange by altering their style property.
 * A link is external if:
 * Its href has :// in it But doesn’t start with http://internal.com.
 */

function yu(){
    let links = document.querySelectorAll('a');
    for(let link of links){
        if(link.href.includes('://')){
            if(!link.href.startsWith('http://internal.com')){
                link.style.color = 'orange';
            } else {
                continue;
            }
        }
       
    }
}


/**
 * Create a function clear(elem) that removes everything from the element.
 */
function cl(id){
    let elem = document.querySelector(`#${id}`);
    elem.innerHTML = "";
}

/**
 * Write an interface to create a list from user input. 
 * For every list item: Ask a user about its content using prompt. 
 * Create the <li> with it and add it to <ul>. 
 * Continue until the user cancels the input (by pressing Esc or via an empty entry). 
 * All elements should be created dynamically. 
 * If a user types HTML-tags, they should be treated like a text.
 */

function interface(){
    let ul = document.querySelector('ul');
    while(true){
        let data = prompt("Data?", "");
        if(!data) break;
        let li = document.createElement('li');
        li.append(data);
        ul.append(li);
    }
}

/**
 * Write a function createTree that creates a nested ul/li list from the nested object.
 * Choose one of two ways of solving this task: 
 * Create the HTML for the tree and then assign to container.innerHTML. 
 * Create tree nodes and append with DOM methods. 
 * Would be great if you could do both. 
 * P.S. The tree should not have “extra” elements like empty <ul></ul> for the leaves.
 */
function jk(){
    let data = {};
    let container = document.querySelector('#tree');
    function isEmpty(obj){
        for(prop in obj){
            if(Object.hasOwn(obj, prop)) return false;
        }
        return true;
    }
    function createDOM(obj){
        for(entry in obj){
            if (typeof(obj[entry]) == 'object' && isEmpty(obj) == false){
                let ul = document.createElement('ul');
                ul.append(entry);
                container.append(ul);
                createDOM(obj[entry])
            } else {
                let li = document.createElement('li');
                li.append(entry);
                let lc = container.lastChild;
                while(lc.lastChild){
                    lc = lc.lastChild
                }
                lc.append(li);
            }
        }
    }
    createDOM(data);
}

function workingJk(){
    function createTree(container, obj){
        container.append(createTreeDom(obj));
    }
    
    function createTreeDom(obj){
        //if there are no keys, return 
        if(!Object.keys(obj).length) return;

        let ul = document.createElement('ul');

        for(let key in obj){
            let li = document.createElement('li');
            li.innerHTML = key;
            
            let childrenUl = createTreeDom(obj[key]);
            if(childrenUl){
                li.append(childrenUl);
            }

            ul.append(li);
        }

        return ul;
    } 
}

/**
 * There’s a tree organized as nested ul/li.
 * Write the code that adds to each <li> the number of its descendants.
 *  Skip leaves (nodes without children).
 */

function descendants(){
    let lis = getElementsByTagName('li');
    for(let li of lis){
        let descendantsCount = li.getElementsByTagName('li').length;
        if(!descendantsCount) continue;

        li.firstChild.data += '[' + descendantsCount + ']';
    }
}

/**
 * There’s a table:
 * There may be more rows in it.
 * Write the code to sort it by the "name" column.
 */

function sortedTable(){
    let sortedRows = Array.from(table.tBodies[0].rows)  //gets all <tr> from <tbody>
        .sort((rowA, rowB) => rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML)); //compares rows A and B data 
    table.tBodies[0].append(...sortedRows); //automatically appends   
}

/**
 * Write a function showNotification(options) that creates a notification: <div class="notification"> with the given content.
 * The notification should automatically disappear after 1.5 seconds.
 * Use CSS positioning to show the element at given top/right coordinates. The source document has the necessary styles.
 */

function showNotification({top = 0, right = 0, className, html}){
    let div = document.createElement('div')
    div.setAttribute("class", "notification")
    if(className){
        div.classList.add(className);
    }
    div.style.top = top + "px";
    div.style.right = right + "px";
    div.innerHTML = html;
    document.body.append(div);
    setTimeout(() => div.remove(), 1500);
}

function testNotification(){
    let i = 1;
    setInterval(() => {
      showNotification({
        top: 10,
        right: 10,
        html: 'Hello ' + i++,
        className: "welcome"
      });
    }, 2000);
}

/**
 * The elem.scrollTop property is the size of the scrolled out part from the top.
 * How to get the size of the bottom scroll (let’s call it scrollBottom)?
 * Write the code that works for an arbitrary elem.
 * P.S. Please check your code: if there’s no scroll or the element is fully scrolled down, then it should return 0.
 */

function scroll(){
    let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;
}

/**
 * Write the code that returns the width of a standard scrollbar.
 * For Windows it usually varies between 12px and 20px.
 *  If the browser doesn’t reserve any space for it (the scrollbar is half-translucent over the text, also happens),
 *  then it may be 0px.
 * P.S. The code should work for any HTML document, do not depend on its content.
 */

function scrllWidth(){
    let width = elem.offsetWidth - elem.clientWidth;
}

/**
 * What are coordinates of the field center?
 * Calculate them and use to place the ball into the center of the green field:
 * The element should be moved by JavaScript, not CSS. 
 *  The code should work with any ball size (10, 20, 30 pixels) and any field size, not be bound to the given values.
 * P.S. Sure, centering could be done with CSS, but here we want exactly JavaScript.
 * Further we’ll meet other topics and more complex situations when JavaScript must be used. Here we do a “warm-up”.
 */

function centerFinder(){
    //since ball position is absoulte, it means that its left/top coordinates are measured from the nearest postitioned element
    ball.style.left = Math.round(field.clientWidth/2 - ball.offsetWidth/2) + 'px';
    ball.style.top = Math.round(field.clientHeight/2 - ball.offsetHeight/2) + 'px';
}