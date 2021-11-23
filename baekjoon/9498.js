let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

number = Number(input[0].split(' '));

if (number >= 90) {
  console.log('A');
} else if (number >= 80) {
  console.log('B');
} else if (number >= 70) {
  console.log('C');
} else if (number >= 60) {
  console.log('D');
} else {
  console.log('F');
}
