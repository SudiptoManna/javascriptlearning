/**
 * Created by sudiptomanna on 6/14/17.
 */
(function () {
    'use strict';
    // get element by Class Name
    console.log(document.getElementsByClassName("heading"));
    // get element by ID
    console.log(document.getElementById("mainHeading"));
    console.log(document.getElementsByTagName("a"));

    var mainHeading = document.getElementById("mainHeading");
    var defHeading = document.getElementsByClassName("heading")[1];
    var heading = document.getElementsByTagName('header')[0];

    mainHeading.id = "updatedHeading";
    console.log(document.getElementById("mainHeading")); // should print null since we updatd the mainHeadingID yo updated heading
    console.log(document.getElementById("updatedHeading")); // should print null since we updatd the mainHeadingID yo updated heading

    defHeading.classList.add('newAddition'); // Adding  a new class
    console.log(document.getElementsByClassName("newAddition")); // getting the new class added
    console.log(defHeading.classList.contains("newAddition")); // checking if the class name exist
    console.log(defHeading.classList.contains("newSub")); // checking if the class name exist; this should return false

    console.log(mainHeading.tagName);
    console.log(mainHeading.nodeType);
    console.log(mainHeading.childNodes[0].nodeType);

    // Working with the elements of the page
    mainHeading.innerHTML = '<span>' + mainHeading.innerHTML + '</span>' // This will wrap the phrase to SPAN
    console.log(document.getElementsByTagName('span'));

    defHeading.textContent = 'In My Code'; // adding a cod ein the existing file
    defHeading.setAttribute('contenteditable', true); //making the newly created content editable
    console.log(defHeading.hasAttribute('contenteditable'));

    var x, length;
    for(x = 0, length = heading.childNodes.length; x < length; x +=1 ){
        if (heading.childNodes[x].nodeType === 1){
            console.log('I am ' + heading.childNodes[x].tagName);
        }
    }

    console.log(heading.children.length); // getting teh length of teh element
    console.log(heading.firstChild.nodeName); // checking the name/type of the first child element
    console.log(heading.lastChild.nodeName); // checking the name/type of the last child element
    console.log(heading.parentNode.nodeName); // checking the name/type of parent element
    console.log(heading.children[0].nodeName); // checking the name/type of the first children element
    console.log(heading.children[0].nextSibling.nodeName); // checking the name/type of the first children element
    console.log(heading.lastChild.previousSibling.nodeName); // checking the name/type of the first children element

    // Adding and removing new elements on the page
    document.body.appendChild(mainHeading); // Adding the element in the body by moving it from the header
    document.body.insertBefore(defHeading, mainHeading); // inserting the element before the defined element i.e. mainHeading
    var subs = document.createElement('dummyElement');
    subs.textContent = 'New element TEXT';

    // Checking of the element exist and then based on that replacing the old element defHeading with subs
    if(document.body.contains(mainHeading)){
        document.body.replaceChild(subs, defHeading);
    }
}());