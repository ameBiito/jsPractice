let ask = (question, yes, no) => {
    if(confirm(question)) yes();
    else no();
} 

ask(
    "do you agree?",
    () => {alert("You agreed");},                  //these are called anonymous functions and their existence is only bound to this function call
    () => {alert("You cancelled the execution");}
);