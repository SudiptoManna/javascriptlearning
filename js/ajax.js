/**
 * Created by sudiptomanna on 7/12/17.
 */
(function(){
    "use strict";

    const xhr = new XMLHttpRequest();
    // Using onload for modern browsers.
    xhr.onload = function (){
        console.log(JSON.parse(xhr.responseText));
    };

    // For old browsers
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
            console.log(JSON.parse(xhr.responseText));
        }
    };

    xhr.withCredentials = true;
    console.log(xhr);

    // Sending a basic data.json file saved
    xhr.open('GET','js/data.json');
    xhr.send();
}());
