//Get largest number

function GetMax(a,b) {
    return a > b ? a:b;
}

function maximum() {
    let numbers = prompt('enter numbers?', '');
    let arr  = numbers.split(',');
    let max = arr[0];
    
    for (let i = 1; i < numbers.length; i++) {
        max = GetMax(+arr[i], max); 
    }

    return max;
}

alert(maximum());