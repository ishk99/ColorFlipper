// This is the procedural way of implementing
let baseSalary = 30;
let overtime = 10;
let rate = 20;

// in the function we have parameters.
function getWage(baseSalary, overtime, rate){
    return baseSalary+(overtime*rate);
}

//Objected Oriented way of programming
let employee = {
    baseSalary: 30,
    overtime: 10,
    rate: 20,
    //in the oop, all the parameters are modelled as properties of the object
    //functions with fewer number of parameters are easier to maintain
    getWage: function(){
        return this.baseSalary + (this.overtime * this.rate);
        //this refers to the current object
    }
};
console.log(employee.getWage());

// //Object Literal is the simplest way to define object
// const circle = {
//     //these are the properties - radius,location
//     radius: 1,
//     location: {
//         x:1,y:1
//     },
//     //draw is a member function - used to define some logic
//     draw: function() {
//         console.log('draw');
//     }
// };
// circle.draw();

// If object has 1 or more methods then it has a behavior
//object literal
// const circle = {
//     radius: 1,
//     location: {
//         x:1,y:1
//     },
//     draw: function() {
//         console.log('draw');
//     }
// };

console.log("-------------------------------");
//Using a factory function
//ES6 syntax
function createCircle(radius){
    return {
        radius,
        //Key - value()
        draw: function(){
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
//calling the draw property 
//on the circle object using a factory function
circle.draw();

//Constructor Function
function Circle(radius){
    console.log('this', this);// O/P ->this Circle {}
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const another = new Circle(); //creates an empty object.
//this in the function will point to the circle object 

//const another = Circle(); // O/p-->  this Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//because it refers to the global window object

//can call a function
//1st parameter we pass an empty object 
//this refers to the object we pass in the 1st parameter
Circle.call({},1);

//can pass the arguments in an array
Circle.apply({}, [1,2,3]);

const anther = new Circle(1);