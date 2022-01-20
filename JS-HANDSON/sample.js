// const uid = "abc12";//setting unique

// //uid = "xyz123" ; this is not going to happen because it is declared a constant

// var firstName = "Ishrat";
// var email = "ish@123.com";
// var pwd = "123456";
// var confirmPassword = "123456";
// var courseCount = 0;
// var isLoggedInFromGoogle = false;

// // prompt("Enter your name");

// var user = "admin";

// //conditional
// switch (user) {
//     case "admin":
//         console.log("you get full access"); //add a return, no code runs after that
//         break;

//     case "subadmin":
//         console.log("gets access to create/delete courses");
//         break;
    
//     case "testprep":
//         console.log("gets access to create/delete tests");
//         break;

//     default:
//         break;
// }

// var user = null; 
// if(user){
//     console.log("Condition is true"); //No output
// }

// if(2 === 2){
//     //checking type and value
//     console.log("This is true");
// }

function tipper(a){
    var bill = a;
    console.log(bill+5);
}

tipper(5);
bigTipper("200");
var bigTipper = function(a){
    var bill = parseInt(a);
    console.log(bill+15);
};

