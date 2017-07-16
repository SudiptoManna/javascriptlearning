/**
 * Created by sudiptomanna on 7/14/17.
 */
(function () {
    'use strict';

    function Shape() {

    }

    Shape.prototype.getArea = function (){
        return this.sides[0] * this.sides[1];
    };

    function Rectangle(width, height){
        this.sides = [width, height, width, height]
    }

    Rectangle.prototype = new Shape();
    Rectangle.prototype.constructor = Rectangle;

}());