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
    console.log(john); // prints
    console.log(john.greet());

    // Creating a new object and assigning that object an existing prototype in this case the person
    const bob = Object.create(Person.prototype, {
        name: { writable: true, value: 'EXACTLY !!!'}
    });
    console.log(bob); // prints the object bob
    console.log(bob.greet());

}());