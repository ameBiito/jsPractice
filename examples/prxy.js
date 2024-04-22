/**
 * Create a proxy that throws an error for an attempt to read of a non-existent property instead.
 * That can help to detect programming mistakes early.
 * Write a function wrap(target) that takes an object target and return a proxy that adds this functionality aspect.
 */

/*let user = {
    name: "John"
};*/

function wrap(target){
    return new Proxy(target, {
        get(target, prop, receiver){
            if(Reflect.get(...arguments)){
                return Reflect.get(...arguments);
            } else {
                throw new ReferenceError(`Property "${prop}" doesn't exist`);
            }
        }
    });
}
/*
user = wrap(user);
try{
alert(user.name);
alert(user.age);
} catch(e){
    if(e instanceof ReferenceError) {
        alert(e.message);
    } else {
        throw e;
    }
}
*/

/**
 * In other words, array[-N] is the same as array[array.length - N].
 * Create a proxy to implement that behavior.
 * That’s how it should work:
 */

let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, prop, receiver){
        if(Number(prop) >= 0) return Reflect.get(...arguments);
        let index = target.length + (Number(prop));
        return Reflect.get(target, index, receiver);
    }
});
/*
alert(array[-1]);
alert(array[-2]);
*/

/**
 * Create a function makeObservable(target) that “makes the object observable” by returning a proxy.
 * In other words, an object returned by makeObservable is just like the original one,
 * but also has the method observe(handler) that sets handler function to be called on any property change.
 * Whenever a property changes, handler(key, value) is called with the name and value of the property.
 * P.S. In this task, please only take care about writing to a property. Other operations can be implemented in a similar way.
 */

function makeObservable(target){

}

let user = {};


