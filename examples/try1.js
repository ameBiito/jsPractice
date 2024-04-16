let user = {
    name:"john",
    age:30,
    introduce(){
        alert(`Hello my name is ${this.name}`);
    },
};

let clone = {};

user.introduce();