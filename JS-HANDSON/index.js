//using primitive type
// let x = 10;
// let y = x;

// x = 20;

// //
// let x = { value: 10 };//object is not stored in the variable
// //it is stored in the memory
// //address is copied, x&y point to the same loc in the memory
// let y = x;
// x.value = 20;

// O/P --> x - {value: 20}, y - {value: 20}

let number = 10;
function increase(number){
    number++;
}

increase(number);
console.log(number);//10
//This is because number incremented inside the function
//It's scope remains till EOF.

let obj = { value: 10 };
function increase(obj){
    obj.value++;
}

increase(obj);
console.log(obj); //11
//Object is passed by reference, 
//that means local pointer points to the same object as global

function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);
circle.draw();
//adding a new property
circle.location = { x: 1 };

//removing a property
delete circle.location;
console.log("-----");

//Enumerating use for in loop
//1.
for (let key in circle){
     console.log(key); //return both properties and methods
}
//2.
for (let key in circle){
     console.log(key, circle[key]);
    // // Ouput ==>
    // //radius 1
    //    draw ƒ () {
    //      console.log('draw');}
}
//3.
for (let key in circle){
    // gettting only the properties and not the methods
    if(typeof circle[key] !== 'function'){
        console.log(key,circle[key]);
    }
}

//getting all the keys in the object
const keys = Object.keys(circle);//returns an array
console.log(keys);

//checking if a property exists for the object
if('radius' in circle){
    console.log('Circle has a radius');
}