// This IS A Practice Page To Practice On ES6 Classes.

 
// Suppose We Have A Class Of Car, We Use Constructor To Create A Prototype Of Car, It Can Be Any Car With Four Wheels Hatchback Black Color And 2019 Model. If We Want To Add These Property To A Specific Brand We Need To Extend This Class And The New Class Will Inherit All These Properties, But If We Want To Add Some More Special Features To Our New Branded Car We Need To Use super() Method Without That It Won't Work.

class Car {
    constructor(){
        this.wheels = 4;
        this.color = "Black";
        this.model = "2019";
        this.type = "Hatchback"
    }
}
    class Audi extends Car{
        constructor(){
//  As We Will Add Windows To Our New Audi Car We Need To Add super()
// If We Don't Use Super This Constructor Will Not Work And Will Throw An Error, So For Our Constructor To Work We Need To Include This super() Method.

            super()
            this.windows = 4;

        }

    }

    const car = new Car();
    const myAudi = new Audi();
    console.log (myAudi.color);