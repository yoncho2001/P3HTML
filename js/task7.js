//Matrix of Numbers

function printMatrix(number) {
    let n = parseInt(number);
    let matrix = '';
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= n; col++) {
            matrix += col + ' ';
        }
        matrix += '\n';
    }
    alert(matrix);
}

let input = prompt('numbers:', '');

printMatrix(input);