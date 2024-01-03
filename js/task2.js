//The biggest of three numbers
let numbers = prompt('numbers ?', '');
let arr =  numbers.split(' ');
let result;

let a = parseFloat(arr[0]);
let b = parseFloat(arr[1]);
let c = parseFloat(arr[2]);

alert(Math.max(a, b, c));
