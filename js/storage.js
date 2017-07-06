/**
 * Created by sudiptomanna on 6/23/17.
 */
(function(){
    "use strict";
    console.log(window.sessionStorage);
    // setting a new storage item
    window.sessionStorage.setItem('testItem', true); //setting the boolean
    window.sessionStorage.setItem('testItem2',['data1','data2']); //setting an array
    window.sessionStorage.setItem('testItem3',JSON.stringify({prop1: 'check1'})); //setting an object

    console.log(JSON.parse(window.sessionStorage.getItem('testItem3'))); //getting the details for the specific item

    function readStoragekeys() {
        for (let x = 0, length = window.sessionStorage.length; x < length; x += 1){
            console.log(window.sessionStorage.key(x));
        }
    }
    readStoragekeys();

    //removing a specific item
    window.sessionStorage.removeItem('testItem2');

    //Clearing the entire storage
    window.sessionStorage.clear();
}());