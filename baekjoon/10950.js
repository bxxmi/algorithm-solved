let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let n = Number(input[0]);

for(let i = 1; i <= n; i++) {
  let data = input[i].split(' ');
    
  let a = Number(data[0]);
  let b = Number(data[1]);
    
  console.log(a + b);
}
