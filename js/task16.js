//Replace tags in text

function replaceATag(inputArray) {
    let html = inputArray[0];
    let result = '';
    let index = 0;

    while (html.indexOf('<a', index) !== -1) {
        let startIndex = html.indexOf('<a', index);
        let endIndex = html.indexOf('</a>', startIndex) + 4;
        let anchorTag = html.substring(startIndex, endIndex);

        let hrefStart = anchorTag.indexOf('href="') + 6;
        let hrefEnd = anchorTag.indexOf('"', hrefStart);
        let url = anchorTag.substring(hrefStart, hrefEnd);

        let textStart = anchorTag.indexOf('>', hrefEnd) + 1;
        let textEnd = anchorTag.indexOf('<', textStart);
        let text = anchorTag.substring(textStart, textEnd);

        result += html.substring(index, startIndex) + '[' + text + '](' + url + ')';
        index = endIndex;
    }
    result += html.substring(index);

    return result;
}

const input = ['<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>'];
alert(replaceATag(input));