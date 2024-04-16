/**
 * Turn the user into JSON and then read it back into another variable.
 */
/*
let user = {
    name: "John Smith",
    age: 35
  };

let str = JSON.stringify(user);
alert(str);
let john = JSON.parse(str);
alert(john.age);
*/



/**
 * In simple cases of circular references, we can exclude an offending property from serialization by its name.
 * But sometimes we can’t just use the name, as it may be used both in circular references and normal properties.
 * So we can check the property by its value.
 * Write replacer function to stringify everything, but remove properties that reference meetup:
 */


let room = {
    number: 23
};
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};
  
  // circular references
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;    //the condition key != "" has to exist because JSON takes the whole object with key "" and value meetup
}));
  
  /* result should be:
  {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */