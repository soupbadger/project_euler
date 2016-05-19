var x = 0;
var y = 1;
var sum = 0;
var temp;

   while(x <= 4e6){
       temp = x + y;
       x = y;
       y = temp;
       if(x % 2 === 0){
           sum += x;
       }
   }
  console.log(sum);
