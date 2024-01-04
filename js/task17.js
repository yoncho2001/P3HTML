//Extract emails from text.

function extractEmails(text) {
    let emailPattern = /[\w.-]+@[\w.-]+\.\w+/g;
    return text.match(emailPattern) || [];
}

let text = "Please contact us at support@example.com or sales@example.net.";
alert(extractEmails(text));