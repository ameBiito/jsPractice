//hahaha, don't look below please(i know how to fix it, i just don't want to now since i've thought about this for days and i'm tired(?)
//i'm now listening to: https://www.youtube.com/watch?v=_M4K5wk9DCM ) 

function addZero(n){ 
    if(n<10){
        return String(n).padStart(2, '0');
    }
    return n;
}
function startClock(){
    let time = new Date();
    let hours = addZero(time.getHours());
    let mins = addZero(time.getMinutes());
    let secs = addZero(time.getSeconds());
    if(document.getElementById("cook")){
        elem = document.getElementById("cook");
        elem.remove();
    }
    let str = `<p id="cook"> <span style="color:red">${hours}</span>:<span style="color:green">${mins}</span>
        :<span style="color:blue">${secs}</span></p>`;
    container.insertAdjacentHTML('afterbegin', str);
    setTimeout(startClock, 1000);
}
function resetClock(){
    clock();
}


function clock(){
    container = document.getElementById("clock");

    /*function startClock(){
        let time = new Date();
        let hours = addZero(time.getHours());
        let mins = addZero(time.getMinutes());
        let secs = addZero(time.getSeconds());
        if(document.getElementById("cook")){
            elem = getElementById("cook");
            elem.remove();
        }
        let str = `<p id="cook"> <span style="color:red">${hours}</span>:<span style="color:green">${mins}</span>
            :<span style="color:blue">${secs}</span></p>`;
        container.insertAdjacentHTML('afterbegin', str);
        setTimeout(startClock, 1000);
    }

    function resetClock(){
        display();
    }*/
    /*
    let bgButton = '<button type="button" onclick="startClock()">Start</button>';
    let endButton = '<button type"button" onclick="display()">Stop</button>';
    container.insertAdjacentHTML('beforeend', bgButton);
    container.insertAdjacentHTML('beforeend', endButton);
    */

    function display(){
        let str = `<p id="cook"> <span style="color:red">HH</span>:<span style="color:green">MM</span>
            :<span style="color:blue">SS</span></p>`;
        if(document.getElementById("cook")){
            elem = getElementById("cook");
            elem.remove();
        }
        container.insertAdjacentHTML('afterbegin', str);
    }
    let bgButton = '<button type="button" onclick="startClock()">Start</button>';
    let endButton = '<button type"button" onclick="resetClock()">Stop</button>';
    container.insertAdjacentHTML('beforeend', bgButton);
    container.insertAdjacentHTML('beforeend', endButton);
    display();
}
clock();