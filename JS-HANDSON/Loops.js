const states = ["Rajasthan", "Delhi", "assam", 1947,"Kerala"];

var i = 0;

for(;;){
    if(i>3) break;
    console.log(i);
    i++;
}

//forEach calls the callbackfn each time for the element in the array.
states.forEach( (s) => {
    console.log(s);
})

console.log("======================NEXT PART=======================");
///
const names = ["Youtube", "facebook", "instagram", "Amazon"];

names.forEach((s) => {
    console.log(s);
})
//for of loop
//in the for loops it is better to use const because the value used to loop should never change
for(const n of names){
    console.log(n);
}

console.log("-----------------------------------------------");
const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    lco: "LearnCode"
}

for(const n in symbols){
    // console.log(n); //gives the keys back
    console.log(symbols[n]);
}