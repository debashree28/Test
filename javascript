1.How to check whether a key exist in a JavaScript object or not.
object can have it's own property or inherited property.
in operator is used for check own property or inherited property.
var person = { name: debashree , age:28};
toString is inherited propery of person object
'name' in person ///true
'salary' in person /// false 
toString in person/// true
if we want test proprty of object is not inherited property then use hasOwnProperty
console.log(person.hasOwnProperty('toString')); // print false
console.log(person.hasOwnProperty('name')); // print true
console.log(person.hasOwnProperty('salary')); // print false
