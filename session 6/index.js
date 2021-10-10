
// ex5:
let fibonacci_number = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    let s = fibonacci_number(n - 1);
    s.number(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_number(8));
 
//  ex6

