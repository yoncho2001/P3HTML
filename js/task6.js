//Min, Max, Sum, Average of numbers

function processNumbers(numbers) {
    let min = parseFloat(numbers[0]);
    let max = parseFloat(numbers[0]);
    let sum = 0;
    let avg = 0;

    for (let i = 0; i < numbers.length; i++) {
        let number = parseFloat(numbers[i]);
        if (number < min) min = number;
        if (number > max) max = number;
        sum += number;
    }
    avg = sum / numbers.length;

    alert(`min=${min.toFixed(2)}\nmax=${max.toFixed(2)}\nsum=${sum.toFixed(2)}\navg=${avg.toFixed(2)}`);
}

let input = prompt('numbers:', '');
let numbers = input.split(' ');

for (let i = 0; i < numbers.length; i++) {
    numbers[i] = parseFloat(numbers[i]);
}

processNumbers(numbers);