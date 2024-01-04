//Sort 3 numbers

let numbers = prompt('numbers ?', '');
let arr =  numbers.split(' ');
let result;

let a = parseFloat(arr[0]);
let b = parseFloat(arr[1]);
let c = parseFloat(arr[2]);

let temp;

if (a < b) {
    temp = a;
    a = b;
    b = temp;
}
if (a < c) {
    temp = a;
    a = c;
    c = temp;
}
if (b < c) {
    temp = b;
    b = c;
    c = temp;
}

alert( a + " " + b + " " + c);