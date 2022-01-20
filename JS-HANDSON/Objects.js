//What is an object in Javascript
//can use let, var or const == why ?
var user = {
    //key value pair
    firstName : "PQRZ",
    lastName : "ABCD",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList: [],
    //defining a method inside an object
    buyCourse: function (courseName){//we dont need to write the function name after function
        //need to insert the course name inside the course list array
        //refer the variable which is inside the same object as the variable
        this.courseList.push(courseName);
    },
    getCourseCount: function (){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    getInfo: function(){
        return `${this.firstName}, ${this.lastName}, ${this.role}, ${this.loginCount}, ${this.facebookSignedIn}, ${this.getCourseCount()}, `;
    }

};

// //since everything is accessed by keys, it is easier to change the value or modify/access them.

// //how to access
// console.log(user.firstName);
// //the parameter here is passed as a string, hence to access the key we need to pass it as a string too
// console.log(user["lastName"]);

//Methods and objects
// var courseList = true;
// // console.log(user.getCourseCount());
// user.buyCourse("React JS Course");
// user.buyCourse("Node JS Course");
// console.log(user.getCourseCount());
// console.log(user.getInfo());

const states = ["Rajasthan", "Delhi", "assam", 1947,"Kerala"];

// console.log(typeof(states[2]));

//While loop
let i = 0;

while(i < states.length){
    console.log(states[i]);
    i++;
}
do{
    console.log(i);
    i++;
} while(i < 10);