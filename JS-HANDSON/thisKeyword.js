console.log(this);

var user = {
    firstName: "Ishrat",
    lastName: "Kaur",
    courseCount: 4,
    getCourseCount: function (){
        console.log("On line 8, this keyword return :", this);
        //return the current object
        function sayHello(){ // A regular function
            console.log("Hello");
            console.log("Line 10", this);//returns a Global Object
        }
        sayHello();//A regular function call
    }
}
user.getCourseCount();