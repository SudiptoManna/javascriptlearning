/**
 * Created by sudiptomanna on 5/11/17.
 */
(function(){
    'use strict';

    var color = 'Blue';
    if (color === 'Green'){
        console.log('you got it wrong');
    } else if(color === 'Yelloww'){
        console.log('Wrong Again');
    } else{
        console.log('correct color is,', color);
    }

    var array = ['array1','array2','array3'];
    if (array.length){
        (array.length > 2) ? console.log(array[0]) : console.log('Nothing to print');
    }

    var anArray = ['item1','item2','item3'];
    // basic for loop
    for (var x = 0, y = anArray.length; x < y; x +=1 ) {
        console.log(anArray[x]);
    }

    // for in loop which is used with the objects

    var objArray = {
        prop1 : 'property1',
        prop2 : 'property2',
        prop3 : 'property3'
    };

    for(var prop in objArray) {
        if (objArray.hasOwnProperty(prop)) {
            console.log(objArray[prop]);
        }
    }
}());