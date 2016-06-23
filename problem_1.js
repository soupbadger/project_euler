//Set sum and divider variables
var sum = 0;
var x = 3;
var y = 5;
//Run for loop to check for remainder of 0 for numbers 1 - 1000
for(var i=1; i<1000; i+=1){
  //nest if statement to check modulus
  if(i % x === 0 || i % y === 0) {
  //add numbers to sum
  sum += i;
  }
}
//print final sum of natural numbers between 1 and 1000 which divide evenly by 3 or 5
console.log(sum);
