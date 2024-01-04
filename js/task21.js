//Digit to english

function digitToEnglish() {
    let number = prompt('enter number?', '');
    let lastDigit = (+number) % 10;
    let toString = "";

    switch (lastDigit) {
        case 1:
            toString = "one";
            break;
        case 2:
            toString = "two";
            break;
        case 3:
            toString = "three";
            break;
        case 4:
            toString = "four";
            break;
        case 5:
            toString = "five";
            break;
        case 6:
            toString = "six";
            break;
        case 7:
            toString = "seven";
            break;
        case 8:
            toString = "eight";
            break;
        case 9:
            toString = "nine";
            break;
        case 0:
            toString = "zero";
            break;

        default:
            toString = "null";
            break;
    }

    return toString;
}

alert(digitToEnglish());