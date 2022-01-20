const colours = ["#69db88","lightblue","#f12f56","#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function() {
    //idea is to get a random colour
    const getRandom = getRandomNumber();
    console.log(getRandomNumber());
    document.body.style.backgroundColor = colours[getRandom];
    color.textContent = colours[getRandom];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colours.length);
}