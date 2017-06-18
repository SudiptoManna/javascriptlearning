/**
 * Created by sudiptomanna on 6/8/17.
 */
(function(){
    'use strict'
    var myArrayUse = ['data', 'beta', 'test'];
    console.log('length of array', myArrayUse.length);

    myArrayUse.push('alpha');
    console.log(myArrayUse);

    myArrayUse.unshift('delete');
    console.log(myArrayUse);

    myArrayUse.pop();
    console.log(myArrayUse);

    //Sorting an array
    console.log(['z','C','a','1000'].sort(function(a,b){
        // In these case '1000' is treated as string and no effect of conversion or unicode value
        var caseA = a.toLowerCase(),
            caseB = b.toLowerCase();

        if (caseA < caseB){
            return -1;
        } else if (caseA === caseB){
            return 0;
        } else{
            return 1;
        }
    }));

    //Sorting with named object
    console.log([{name: 'z'},{name: 'a'},{name: 'c'}].sort(function(a,b){
        var caseA = a.name.toLowerCase(),
            caseB = b.name.toLowerCase();

        if (caseA < caseB){
            return -1;
        } else if (caseA === caseB){
            return 0;
        } else{
            return 1;
        }
    }));

    // 'map' will iterate through each element of teh array and act upon it
    console.log(myArrayUse.map(function(value){
        return value.toUpperCase();
    }));
}())