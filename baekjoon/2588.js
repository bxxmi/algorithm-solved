let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 띄어쓰기로 구분 없이 총 2줄을 입력 받기 때문에
// input[0], input[1]을 선언함
let a = Number(input[0]);
let b = Number(input[1]);

// 세 자리수를 곱하는 과정에서 위치의 값을 구하려면 
// 곱하는 수(b)의 1의 자리, 10의 자리, 100의 자리를 구해야 한다.
let one = Number(input[1][2]); // 38'5'
let ten = Number(input[1][1]); // 3'85'
let hundred = Number(input[1][0]); // '385'

console.log(a * one); // 2360
console.log(a * ten); // 3776
console.log(a * hundred); // 1416
console.log(a * b); // 181720
