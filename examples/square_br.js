let user = {
    name: "John",
    age: 30,
}; 
let known = prompt("What do you want to know about the user?");
alert(user[known] ?? "I see you're not interested");