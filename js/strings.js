/**
 * Created by sudiptomanna on 6/8/17.
 */
(function(){
    'use strict';

    var testString = "   First second third fourth    ";
    console.log('What is the length of teh string? ',testString.length);
    console.log('Split the entire string',testString.split(' '));
    console.log('Check for first index of the character from beginning',testString.indexOf('t'));
    console.log('Check for the last index of teh character from the limit specified',testString.lastIndexOf('t',22));
    console.log('Convert String to Uppercase', testString.toUpperCase());
    console.log('Convert String to Uppercase', testString.toLowerCase());
    console.log('Sliced string', testString.slice(15,9));

    var trimmed = testString.trim();
    console.log('Trimmed String',trimmed); // Trim will only remove white spaces from start and end of the string

}());