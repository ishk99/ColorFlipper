const s = 'Hello world';

console.log(s.length);
console.log(s.split(' '));

//ARRAYS
//variables that hold multiple values
const numbers = new Array(1,2,3,4,5);
const fruits = ['apples', 'oranges', 'pears', 10];
console.log(numbers);
console.log(fruits);

// fruits[2] = 'mango';
// //we can do this to a const array.
// fruits = [];
//cannot reassign a const variable

//OBJECT LITERALS
//key value pairs
const person = {
    firstName: 'John',
    lastName: 'Doe',
    hobbies: ['music','movies'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
//to access single value 
console.log(person.firstName);
console.log(person.address.city);
console.log(person.hobbies[1]);

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
];
console.log(todos[2].text);
//json is how we send data to  server
//json format is similar to 


//how data is sent to servers
const todoJSON = JSON.stringify(todos);


//FOR LOOPS
for(let i = 0; i <= 10; i++){
    console.log(`For Loop Number: ${i}`);
}

let i = 0;
while(i < 10){
    console.log(`While Loop Number: ${i}`);
    i++;
}

for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

//High order array methods
//forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo.text);
});

//with map an array is returned
const todoText = todos.map(function(todo) {
    return todo.text;
});

//using filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})

console.log(todoCompleted);

//1 is an integer
//"1" is a string
//Data type is not checked, only value
if (1 == "1"){
    console.log("Abstract"); 
}

//checks the data type
if (1 === "1"){
    console.log("Strict");
}else{
    console.log(false);
}
console.log("-----------------------------");
console.log(null == undefined);

console.log("-----------------------------");
var testVar;
console.log(testVar);
console.log(typeof testVar);// shows undefined

var testVar = null;
console.log(testVar); //shows null
console.log(typeof testVar); //shows object
console.log("-----------------------------");

let x = "" ? true : false;
console.log(x);
let y = "Hello" ? true : false;
console.log(y);
console.log("-----------------------------");
var p = 0 ? true : false;
console.log(p);
var p = 5 ? true : false;
console.log(p);
let a = -5 ? true : false;
console.log(a);

console.log("-----------------------------");
function addNums(num1 , num2){
    console.log(num1 + num2);
}

addNums(); // by doing this we get NaN -> which means not a number
//expected a number but did not get

addNums(5,5); //10 because overwrites the default values

console.log("-------------------------------");

//can write like this
const addNumss = (num1, num2) => {
    return num1+num2;
}
console.log(addNumss(3,2));

// and like this
const addNums1 = (num1, num2) => num1+num2;
console.log(addNums1(2,2));

todos.forEach((todo) => console.log(todo)); 
console.log("-------------------------------");

//Constructor function
function Person(firstName, lastName, dob) {
    //setting properties of object
    this.firstName = firstName;
    this.lastName = lastName;
    // this.dob = dob;
    this.dob = new Date(dob);//using Date() function
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate object
const person1 = new Person('John', 'Damon', '12-12-1989');
console.log(person1);
console.log(person1.getBirthYear());//1989
console.log(person1.getFullName());//John Damon


console.log("-------------------------------");


console.log("-------------------------------");
console.log("-------------------------------");
