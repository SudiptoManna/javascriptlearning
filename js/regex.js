/**
 * Created by sudiptomanna on 7/12/17.
 */
(function(){
    "use strict";

    const pattern = /@/; // Only '@'
    console.log(pattern.test('smanna#fastspring.com')); // Negative scenario
    console.log(pattern.test('smanna@fastspring.com')); // Positive scenario

    const pattern2 = /^[A-Z]+$/; // Only Uppercase
    console.log(pattern2.test('D1')); // Negative scenario since pattern2 expects only uppercase alphabets
    console.log(pattern2.test('d')); // Negative scenario since pattern2 expects only uppercase alphabets
    console.log(pattern2.test('D')); // Positive scenario

    const aplhaNumeric = /^[a-zA-Z0-9]+$/; // No special character
    console.log(aplhaNumeric.test('test@data.com')); // Negative scenario since pattern2 expects only uppercase alphabets
    console.log(aplhaNumeric.test('test123Z'));

    const numberFormat = /^[0-9]{3}-[0-9]{3}-[0-9]{3}$/; // xxx-xxx-xxx format where x is only number
    console.log(numberFormat.test('111-111-11a')); // Negative scenario
    console.log(numberFormat.test('111-111-111')); // Positive scenario

    const numberFormat2 = /^[0-9]{3}\*[0-9]{3,6}\*[0-9]{3}$/; // 111*1234*999 escape special character by '\'
    console.log(numberFormat2.test('111*1111*11a')); // Negative scenario
    console.log(numberFormat2.test('111*1113*111')); // Positive scenario

    const numberFormat3 = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{7,15}$/; // 111*1234*999 escape special character by '\' and accept all data
    console.log("Valid GST? ",numberFormat3.test('27AAACZ7982K1ZE')); // Negative scenario
    console.log("Valid GST? ",numberFormat3.test('27AAACZ7982K1Z5')); // Positive scenario

    const noSpecial = /^\w+$/; // 111*1234*999 escape special character by '\'
    console.log(noSpecial.test('111*1111*11a')); // Negative scenario
    console.log(noSpecial.test('aA12_')); // Positive scenario

    // Regular Brackets '?' means 0 or 1 character(Occurence)
    const pipeUse = /^http(?:s?):/;  // 's' will not be remembered, its non capturing
    console.log("is the domain valid? ", pipeUse.test('https://fastspring.com'));
    console.log("is the domain valid? ", pipeUse.test('httpx://fastspring.com'));

    // Camel Cased scenario
    const camelCased = 'camelCasedString';
    console.log("Converted String: ",camelCased.replace(/([A-Z])/g,'_').toLowerCase()); // `/g` will be treated as global and it will modify all the events

    const script = /java(?=script)/i; // '/i' will make it case insesitive
    console.log("javascript passed? ",script.test('java')); // Negative scenario where the test will look for script
    console.log("javascript passed? ",script.test('javaSCRIPT')); // positive scenario

    const lettersAndNumbers = /\d/g; // check for the digits in the string passed
    console.log('a9b8'.match(lettersAndNumbers)); // Should return 2 matches
    console.log('a9b8c2d2'.match(lettersAndNumbers)); // Should return 4 matches


}());