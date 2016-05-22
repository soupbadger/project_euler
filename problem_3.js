/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var x = 0;
var number = 600851475143;

for(var i = 0; i <= number; i += 1) {
  if(number % i != 0){
    x = i;
  }
}
console.log(x);
