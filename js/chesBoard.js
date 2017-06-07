/**
 * Created by sudiptomanna on 2/12/17.
 */
/*
Program to print following chess pattern
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
 */
var size = 8; //Define the size of the chess board
var board = ""; // Define the element that wil be used yto print the character
for (y = 0; y < size; y++ ){ // Outerline for the y AXIS
    for(x = 0; x < size ; x++){ // Outliner for the X-AXIS
    if ((x + y) % 2 == 0)
        board += '#'; // Print '#' for all the even places
    else
        board += ' '; // Print blank for all the odd lines convention
    }
    board += '\n';
}
console.log(board)
