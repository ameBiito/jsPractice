/**
 * The task is to create a generator function pseudoRandom(seed) that takes seed and creates the generator with this formula.
 */

function* pseudoRandom(seed){
    let next;
    let prev = seed;
    while(true){
        next = prev* 16807 % 2147483647
        prev = next;
        yield next;
    }
}

let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073