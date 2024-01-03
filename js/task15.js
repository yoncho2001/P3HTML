//Parse URL

function parseURL(input) {
    let url = input[0];
    let protocolIndex = url.indexOf('://');
    let serverIndex = url.indexOf('/', protocolIndex + 3);

    let protocol = url.substring(0, protocolIndex);
    let server = url.substring(protocolIndex + 3, serverIndex !== -1 ? serverIndex : url.length);
    let resource = serverIndex !== -1 ? url.substring(serverIndex) : '';

    return `protocol: ${protocol}\nserver: ${server}\nresource: ${resource}`;
}

const input = ['http://telerikacademy.com/Courses/Courses/Details/239'];
alert(parseURL(input));