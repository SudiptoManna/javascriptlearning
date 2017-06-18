/**
 * Created by sudiptomanna on 6/10/17.
 */
(function(){
    'use strict';
    var myObjUse = {
        'property1': "test",
        'property2': "data",
        'constructor' : "constructor"
    },
        testArray = ['1','2','3'];

    // Get the properties defined when the object was created
    console.log(myObjUse.hasOwnProperty('constructor'));
    myObjUse.outsideProp = "outside";
    // Get the properties of the object defined separately
    console.log(myObjUse.hasOwnProperty('outsideProp'));

    //Checking the prototype of the objects being passed
    console.log(Object.prototype.toString.call(testArray));
    console.log(Object.prototype.toString.call(myObjUse));

    console.log(Object.prototype.valueOf.call(myObjUse));
}());