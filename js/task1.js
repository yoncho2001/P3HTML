//Exchange if greater. Slap two nunbers if the first is biger
let a = prompt('numbers ?', '');
let b = prompt('numbers ?', '');
if (a > b) {
    [a,b] = [b,a]
}
alert(a + " " + b);