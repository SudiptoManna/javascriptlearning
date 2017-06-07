/**
 * Created by sudiptomanna on 6/4/17.
 */
(function (){
   'use strict';

   //set timeout
    function log(message){
        console.log(message);
    }
    setTimeout(function (){
        log('myMessage');
    }, 1000);

    //Set Interval
    function pulse(){
        console.log('newMsg');
        counter += 1;

        if (counter === 5) {
            clearInterval(interval)
        }
    }
    var interval = setInterval(pulse,1000),
    counter = 0;
}());