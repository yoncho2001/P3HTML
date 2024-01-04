//Reverse string

function reverse(string) {
    let normString = string.split('');
    let revString = [];
    
    for (let i = normString.length - 1; i >= 0; i--) {
        revString[normString.length-i-1] =normString[i]
    }
    revString = revString.join('');
    return revString;
}

var sample = "sample";
alert(reverse(sample));