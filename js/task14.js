// Find sub-string. On input you have arr with sub-string and string. On the output you have count.

function subSting(string) {
    let [searchString, text] = string;
    let count = 0;
    let find = searchString.toLowerCase();
    let index = text.toLowerCase().indexOf(find);

    while (index !== -1) {
        count++;
        index = text.toLowerCase().indexOf(find, index + 1);
    }

    return count;
}
var sample = [
	'in',
	'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'
]
;

alert(subSting(sample));