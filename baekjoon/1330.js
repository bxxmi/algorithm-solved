let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

a = Number(input[0].split(' ')[0]);
b = Number(input[0].split(' ')[1]);

if (a > b) {
  console.log('>');
} else if (a < b) {
  console.log('<');
} else {
  console.log('==');
}
