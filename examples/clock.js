function clock(){
    container = document.getElementById("clock");
    function display(){
        let time = new Date();
        let str = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
        container.innerHTML= str;
        let timerId = setTimeout(display, 1000);
    }
    display();
}
clock();