var name = "abcd";

console.log("Line number 3", name);

function sayName(){
    // var name="ishrat";
    console.log("Line number 6",name);
    sayNameTwo();
    function sayNameTwo(){
        var name = "ishrat2";
        console.log("Line number 12", name);
    }
}
sayName();
//both print abcd, because sayName func can access the variable "name".
