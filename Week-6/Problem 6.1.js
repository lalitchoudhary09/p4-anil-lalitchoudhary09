// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Problem 6.1: Max Sum Contiguous Subarray");
const test = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let best, overallbest,r1;
console.log(test);
best = test[0];
overallbest=test[0];
for( let i = 1; i < test.length; i ++)
{
  r1 = best + test[i];
  if (r1 < test[i])
  {
      best = test[i];
  }
  else
  {
      best = r1;
      if(overallbest < best)
      {
         overallbest = best; 
      }
  }
    
}
console.log("Max Sum Contiguous Subarray is " + overallbest);


