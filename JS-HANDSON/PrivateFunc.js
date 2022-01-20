function Circle(radius){
    this.radius = radius;

    //these two methods are defined inside circle function, and not object,
    //they are technically not private methods.
    let defaultLocation = { x: 0, y: 0 };//pvt

    //method to access pvt function.
    this.getDefaultLocation = function(){
        return defaultLocation;
    }
    let computeLocation = function (factor){//pvt
        //..
    }

    this.draw = function() {
        computeLocation(0.1);
        console.log('draw');
    };
}

const circle = new Circle(10);
circle.defaultLocation; //cannot access the function
console.log (circle.getDefaultLocation());//can only read it
circle.draw();

