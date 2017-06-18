/**
 * Created by sudiptomanna on 6/10/17.
 */
(function(){
    'use strict';

var testFunc =    function testFunc(arg1, arg2){
        return arg1 + arg2;
    };

    console.log(testFunc.length);

    var person = {
        'name':'Sudipto',
        'job':'QA'
    }
    // Call Method

    function introduce(inductee) {
        console.log('Hey ' + inductee + ', my name is ' + this.name + ', Welcome');
    }
    introduce.call(person, 'Lesley');

    function chat(respondent, subject){
        console.log(respondent + ' is talking about ' + subject + ' with ' + this.name + ' regarding '+ this.job);
    }

    // Apply method on the function

    function engage(mode, object, args){
        mode.apply(object, args);
    }

    engage(introduce, person, ['Paul']);
    engage(chat, person, ['Jason','Venu']);

    // Bind method on function, use existing object

    function addToCart(fee, price){
        if (!this.total){
            this.total = 0;
        }
        this.total += price += fee || 0;
        return this.name +'has total $ '+ this.total;
    }

    var sudiptosCart = addToCart.bind(person,1);

    console.log(sudiptosCart(40));
    console.log(sudiptosCart(80));

    var sukhen ={
        'name': 'Sukhen'
    }

    var sukhensCart = addToCart.bind(sukhen,2);
    console.log(sukhensCart(40));
    console.log(sukhensCart(80));

}());