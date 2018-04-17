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
2.What are the way by which we can create object in JavaScript ?
i) function based 

function Employee(name, age,salary){
  this.name = name;
  this.age = age;
  this salary = salary
};
var Employee1 = new Employee('deba', 28, 122);
var Employee2 = new Employee('deba1', 28, 121);
we can create different object of simillar property.
ii)object literal
var employee = {name: "debashree",
                age: 28
                salary: "2131"
                getName: function(){
                            return this.name;
}}
iii) using javascript new keyword.
var employee = new Object();
employee.name= "Debashree;
employee.age = 28;
employee.getName = function(){
  return this.name;
}
3.Difference between Function, Method and Constructor calls in JavaScript.
function sum(a, b) {
 return a+b;
 } 
 sum(10.20);
 method: object properties reference to function 
 var employee = { name: 'xsw',
                  getName : function(){ return this.name;}
                 }
 constructor:constructor method special method used for creating and intializing object.
 4. why javascript is loosely typed ?
 javascript is loosely typed because varibale is declared without type. variable type is determined at time variable assignment.
 var a = 10; ///number
 5.what is scope in javascript?
 The global scope is a window object and its used out of function and within the functions.
The local scope is a function object and its used within the functions.
 there are two types of scope 
 local scope and global scope
 variable defined outside  the function is global variable.
 variable defined inside the function is local variable.
 6.explain event bubbling and event capturing?
 event capturing : event is captured by outermost element and then propagrated to inner most element.
 event bubbling: event is handled by innermost element and then propagrated to outer most element.
 7.how to convert json object to string?
 JSON.stringify(myobject);
 8.how to convert JSON string to object?
 JSON.parse(jsonData);
 9.what is closure?
 closure is a function inside another function(parent function) and have access to variable that are declared and defined in parent 
 function scope
 useful for hiding implementation of functionality (encapsulation)
 10.what is the drawback of creating true private in javascript?
 because new copy of method would be created for each instance
 11.how to archieve inheritance?
 Pseudo classical inheritance" and "Prototype inheritance"
 12.What is prototype in JavaScript?
 object property called prototype.
 
 
 
