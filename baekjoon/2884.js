const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
    let hour = Number(input[0].split(' ')[0]);
    let minute = Number(input[0].split(' ')[1]);
    
    if (minute >= 45) {
        minute -= 45;
    } else {
        hour -= 1;
        minute = minute + 15;
        if (hour == -1) {
            hour = 23;
        }
    }
    console.log(hour, minute);
});
