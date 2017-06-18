/**
 * Created by sudiptomanna on 6/14/17.
 */
(function () {
  'use strict';

  //current system date
  var now = new Date();
  console.log(now);

  //date in UNIX or EPOCh
    var unix = new Date(1497472498)
    console.log('Unix Time passed:', unix);

    // Special Date
    var specialDate = new Date('April 29 1989');
    console.log('Special Date passed: ', specialDate);

    console.log('Current date is: ', now.getDate());
    var newDate = now.getDate() + 1;

    console.log('new date is: ', newDate);

}())