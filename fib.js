function fib(n) {
  if(n <= 2) {
    return 1;
  }
  let result =  fib(n-1) + fib(n-2);
  return result;
}

function arrFib(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(fib(i));
  }
  return arr;
}
