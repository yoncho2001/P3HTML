//Numbers from 1 to N

let number = +prompt('number ?', '');

let result = "";

for (let i = 1; i <= number; i++) {
    result += i + ' ';
}

alert(result);