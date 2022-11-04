'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
 const nARR = arr;
 
let i;
 
var maxNum = 0;
var minNum = 0;
var equal = 0;


const findMax = Math.max(...nARR);
const findMin = Math.min.apply(null,nARR);

 for (i=0; i<nARR.length; i++){

      if(nARR[i] < findMax){
         maxNum = maxNum + nARR[i];
     }else if (findMax == findMin){
         equal = equal + nARR[i];
         
     }
 };
for (i=0; i<nARR.length; i++){

      if( nARR[i] > findMin ){
         minNum = minNum + nARR[i];
    
     }
       
 }
 if (findMin == findMax){
     console.log(equal-findMax,equal-findMin)
 }else console.log(maxNum,minNum)
  //console.log(maxNum,minNum);
//  console.log(findMax);
//  console.log(findMin);
 

}




function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}































/////////////////////////////////    QUESTION   ////////////////////////////////






// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// The minimum sum is  and the maximum sum is . The function prints

// 16 24
// Function Description

// Complete the miniMaxSum function in the editor below.

// miniMaxSum has the following parameter(s):

// arr: an array of  integers
// Print

// Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

// Input Format

// A single line of five space-separated integers.

// Constraints


// Output Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input

// 1 2 3 4 5
// Sample Output

// 10 14
// Explanation

// The numbers are , , , , and . Calculate the following sums using four of the five integers:

// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Sum everything except , the sum is .
// Hints: Beware of integer overflow! Use 64-bit

