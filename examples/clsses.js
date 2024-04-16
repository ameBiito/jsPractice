

/**
 * The Clock class (see the sandbox) is written in functional style. Rewrite it in the “class” syntax.
 * P.S. The clock ticks in the console, open it to see.
 */


class Clock {
    constructor({template}){
        this.template = template;
    }
    render(){
        let date = new Date();

        let hours = date.getHours();
        if(hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if(mins < 10) mins = '0' + mins;
        
        let secs = date.getSeconds();
        if(secs < 10) secs = '0' + secs;

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        
        console.log(output);
    }

    start() {     // added so that a wrapper wasn't necessary in setTimeout() 
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }

    stop () {
        clearInterval(this.timer);
    }

}
/*
let clock = new Clock({template: 'h:m:s'});
clock.start();
*/


/**
 * Create a new class ExtendedClock that inherits from Clock and adds the parameter precision – the number of ms between “ticks”.
 *  Should be 1000 (1 second) by default.
 * Your code should be in the file extended-clock.jsDon’t modify the original clock.js. Extend it.
 */

class ExtendedClock extends Clock {
    constructor(options){
        super(options);
        let { precision = 1000 } = options; //object destructuring -> let precision = options.precision
        this.precision = precision; 
    }


    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}

let clock = new ExtendedClock({template: 'h:m:s', precision: 20});
clock.start();