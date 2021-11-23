// 1 - 16번까지 자바스크립트에서 값 입력 받는 부분
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
    // 이 안에 로직 작성
    let x = Number(input[0]);
    let y = Number(input[1]);

    if (x > 0 && y > 0) {
        console.log('1');
    } else if (x > 0 && y < 0) {
        console.log('4');
    } else if (x < 0 && y > 0) {
        console.log('2');
    } else {
        console.log('3');
    }
});
