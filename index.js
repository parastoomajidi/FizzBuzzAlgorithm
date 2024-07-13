// Problem Statement
// Write a program that prints the numbers from 1 to 100. But for multiples of three, 
// print "Fizz" instead of the number, and for the multiples of five, print "Buzz".
//  For numbers which are multiples of both three and five, print "FizzBuzz".

// If the number is divisible by both 3 and 5 (i.e., 15), print "FizzBuzz".
// If the number is divisible by 3, print "Fizz".
// If the number is divisible by 5, print "Buzz".
// If the number is not divisible by either 3 or 5, print the number itself.

const output = fizzBuzz(5);
console.log(output);

function fizzBuzz(input){
    if( (input % 3 === 0) && (input % 5 === 0))
        console.log("fizzBuzz")

    if(input % 3 === 0)
        console.log("Fizz");

    if(input % 5 === 0)
        console.log("Buzz");

    return input;
}