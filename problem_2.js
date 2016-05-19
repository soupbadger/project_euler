var sum = 0;
var total =0;
for(var i=0; i<4000000; i+=1){
  sum += sum;
  if(sum % 2 === 0) {
    total += sum;
  }
}

console.log(total);
