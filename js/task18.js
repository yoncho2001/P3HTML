//String format. Full the blank spaces

function stringFormat(str) {
    for (var i = 1; i < arguments.length; i++) {
        var regex = new RegExp('\\{' + (i - 1) + '\\}', 'g');
        str = str.replace(regex, arguments[i]);
    }
    return str;
}

alert(stringFormat('Hello {0}!', 'Peter'));
alert(stringFormat('{0}, {1}, {0} text {2}', 1, 'Pesho', 'Gosho'));