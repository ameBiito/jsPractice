

/**
 * Create an object calculator with 3 methods:
 * read() prompts for 2 values and saves them as object properties with names "a" and "b" repectively
 * sum() returns the sum of saved values
 * mul() multiplies saved values and returns the result
 */

let calculator = {
    a: null,
    b: null,
    read(){
        
        this.a = prompt("Enter the first value", "");
        this.b = prompt("Enter the second value", "");
    },
    sum(){
        alert(Number(this.a) + Number(this.b));
    },
    mul(){
        alert(this.a * this.b);
    },
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());