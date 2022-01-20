// var states = new Array("Rajasthan","Delhi","Mumbai");
// console.log(Array.indexOf("newwyy"));
// console.log(Array.from("okkk"));

// function isEven(element){
//     // if(element % 2 === 0){
//     //     return true;
//     // }
//     // return false;
//     //the whole above code can also be written as following:
//     return element % 2 === 0;
// }


// var isEven = (element) => {
//     return element % 2 === 0;
// };

// console.log(isEven(2));

var result = [2,3,6,8].every((e) => 
   e%2 === 0 //every function makes the callback work on every argument in the array.
   //remove the return if using "()"
);
console.log(result);