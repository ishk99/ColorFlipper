const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
//generates in the format #f15025

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let hexColor = '#';
    //set up a loop runs for 6 times
    for(let i = 0;i<6;i++){
        hexColor += hex[getRandom()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandom(){

    console.log(Math.floor(Math.random()) * hex.length);
    // makes sure we get a number 0 - length of hex array.
    return Math.floor(Math.random() * hex.length);
}

// getRandom();