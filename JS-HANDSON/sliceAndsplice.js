//range - 1st point is inclusive, last point is exclusive
console.log();

var users = ["ted","tim","sam","sor","sod"];
// console.log(users.slice(1,4)); //1-tim and since 3rd is not exclusive, we get tim and sam as O/P.
// console.log(users.slice(1));

users.splice(1,2,"HI");
//2nd value is the count value from the 1st given index.
//replace the values with the given value as 1 whole.
console.log(users);