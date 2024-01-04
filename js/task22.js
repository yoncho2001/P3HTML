//count how much number is in array

function countOccurrences() {
    let n = prompt('enter n?', '');
    let numbers = prompt('enter n numbers?', '');
    let x = +prompt('enter x?', '');
    let arr  = numbers.split(' ');
    let count = 0;

    for (let i = 0; i < +n; i++) {
        if (+arr[i] == x) {
            count++;
        }
    }

    return count;
}

alert(countOccurrences());