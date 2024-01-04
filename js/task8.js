function hexToDecimal(hexString) {
    let decimal = 0;
    let base = 1;

    for (let i = hexString.length - 1; i >= 0; i--) {
        let char = hexString[i];

        if (char >= '0' && char <= '9') {
            decimal += (char.charCodeAt(0) - '0'.charCodeAt(0)) * base;
        } else if (char >= 'A' && char <= 'F') {
            decimal += (char.charCodeAt(0) - 'A'.charCodeAt(0) + 10) * base;
        } 

        base = base * 16;
    }

    alert( decimal.toString());
}
let  hexString = "ff";
console.log(hexToDecimal(hexString)); 