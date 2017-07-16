/**
 * Created by sudiptomanna on 7/14/17.
 */
(function () {
    'use strict';
    /*
    Closure is a nested function.
    With closure when the inner function returns it doesn't destroys the scope.
    It also permits the variable to be alive after the inner function is complete.
     */

    function Order(){
        let total = 0;
        return function addProduct(price) {
            let salesTax = price * 0.075,
                fee = price * 0.1;
            total += price + salesTax + fee;
            return total;
        };
    }

    let myOrder = new Order(); // myOrder is the closure
    console.log("My total is: ",myOrder(100));
    console.log("My total is: ",myOrder(200));
}());