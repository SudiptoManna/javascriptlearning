/**
 * Created by sudiptomanna on 7/6/17.
 */
(function () {
    'use strict';

    const newObject = {};
    Object.prototype.mySpecialProperty = 'Special';
    console.log(newObject.mySpecialProperty);

    const newArray = [1,2,3];
    if (!Array.prototype.first){
        Array.prototype.first = function () { return this[2]};
    }
    console.log(newArray.first());

    newObject.prop1 = 'property1';
    newObject.prop2 = 'property2';
    Object.keys(newObject).forEach(function (item) {
        console.log(newObject[item]);
    });
    //When we freeze we cannot touch the object anymore
    Object.freeze(newObject);

    if(!Object.isFrozen(newObject)){
        newObject.prop1 = 'Updated property';
    }

    const unFrozen = {};
    Object.keys(newObject).forEach(function (item) {
        unFrozen[item] = newObject[item];
    });

    // When we seal we can update the object but we cannot delete it
    Object.seal(unFrozen);
    unFrozen.prop1 = 'unfrozen Object';
    console.log(unFrozen.prop1);

    if (!Object.isSealed(unFrozen)){
        delete unFrozen.prop2;
        console.log(unFrozen.prop2);
    }

    // preventsExtension will not allow any extensible
    const extensible = {};
    console.log(Object.isExtensible(extensible));

    Object.preventExtensions(extensible);
    if (Object.isExtensible(extensible)){
        extensible.newProperty = 'newProp';
    }
    console.log(extensible);

    const Person = function (name) {
        this.name =name;
    };

    Person.prototype ={
        greet: function () {
            return this.name
        }
    };

    const john = new Person('John');
    console.log(john); // prints the object prototype.
    console.log(john.greet()); // prints the result of greet function

    // Creating a new object and assigning that object an existing prototype in this case the person
    const bob = Object.create(Person.prototype, {
        name: { writable: true, value: 'coming from the create and the prototype'}
    });
    // Adding a new property job to the bob object and explicitly mentioning the property on it, with writeable, configureable and enumerable
    Object.defineProperty(bob, 'job', {
       value: 'Quality Analyst',
        writeable: true,
        configurable: true,
        enumerable: true
    });

    // Appending properties to the bob object
    Object.defineProperties(bob, {
       heightinCM: {
           value: 168
       },
        weightinLBS: {
           value: 150
        }
    });
    console.log("Entire Object", bob); // prints the entire bob object along with the new property added
    console.log("Only JOB:", bob.job); // prints only oe property
    console.log(bob.greet()); // greet bob
}());