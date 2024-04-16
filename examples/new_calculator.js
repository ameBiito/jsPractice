/**
 * Create a function Calculator that creates objects with 3 methods:
 * · read() prompts for 2 values and saves them as object properties with names a and b respectively
 * · sum() returns the sum of these properties
 * · mul() returns the multiplications product of these properties
 */

function Calculator(){
    this.sum = function(){
        return Number(this.a) + Number(this.b);
    };
    this.mul = function(){
        return this.a * this.b;
    };
    this.read = function(){
        this.a = prompt("First number?", 0);
        this.b = prompt("Second number?", 0);
    }
}

let u = new Calculator();

u.read();
alert(u.sum());
alert(u.mul());