/**
 * Created by sudiptomanna on 7/14/17.
 */
(function(){
    "use strict";

    function shape2D() {
        return{
            type: this.constructor.name,
            sides: []
        };
    }

    function Rectangle(length,width) {
        const shape = shape2D.call(this);
        shape.sides.push(width, length, width, length);
        shape.getArea = function () {
            return shape.sides[0]*shape.sides[1];
        };
        return shape;
    }

    function SquareTS(sizeA){
        const shape = shape2D.call(this);
        shape.sides.push(sizeA);
        shape.getArea =  function(){
            return Math.pow((shape.sides[0]),2);
        };
        return shape;
    }

    // Inheriting the previously created function off inhertiance
    function Square(sidesLength){
        return Rectangle.call(this, sidesLength, sidesLength);
    }

    const myRect = new Rectangle(5,4);
    console.log("Type: ", myRect.type);
    console.log("Area: ", myRect.getArea());
    console.log("Sides: ", myRect.sides.length);

    const mySqr = new SquareTS(4);
    console.log("Type: ", mySqr.type);
    console.log("Area: ", mySqr.getArea());

    const mySqr2 = new Square(5);
    console.log("Type: ", mySqr2.type);
    console.log("Area: ", mySqr2.getArea());
}());