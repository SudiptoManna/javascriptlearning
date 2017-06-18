/**
 * Created by sudiptomanna on 6/14/17.
 */
(function(){
    'use strict';

    var subHeading = document.getElementsByTagName('h2')[0];
    var header = document.getElementsByTagName('header')[0];

        subHeading.addEventListener('hover', function () {
            console.log('Mose moved over', subHeading);
            e.stopPropagation();
        });

        header.addEventListener('click', function (e) {
            console.log(e.target.nodeName + ' was clicked');
            e.stopPropagation();
        });

    document.addEventListener('click', function () {
        console.log('something else was clicked')
    });

    // Setting up a anchor variable for the HREF.
    var anchor = document.createElement('a');
    anchor.textContent = 'fastSpring';
    anchor.setAttribute('href','https://fastspring.com');
    document.body.appendChild(anchor);
    console.log(anchor.hasAttribute('href'));

    // Prevent teh defaulyt action on the anchor we created i.e routting ot the FS website
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('Preveneted from Default action');
    });

    // Create a function to handle the event and later remove them
    function mouseEvent(){
        console.log('Mouse event triggered');
    }

    var counter = 0;
    // Adding event to capture move enter on header
    subHeading.addEventListener('mouseenter', mouseEvent);
    // removing event of entering mouse near the header
    header.removeEventListener('mouseenter', mouseEvent);
}());