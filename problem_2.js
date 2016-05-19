var x = 1;
var y = 1;
var z;
var sum;

while( x <= 4e6){
  if(x % 2 === 0){
    sum += x;
  }

z = x + y;
y = x;
x = sum;

}
console.log(sum);
