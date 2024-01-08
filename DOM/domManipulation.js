function solve(dom, contents) {

    if (typeof dom === 'string') {
        element = document.getElementById(dom);

        if (element === null) {
            throw new Error('Id does not exist');
        }
    }
    else if (!(dom instanceof Element)) {
        throw new Error('Provided first parameter is not corect');
    }
    if (!Array.isArray(contents)) {
        throw new Error('Contents must be an array');
    }

    contents.forEach(content => {
        if (typeof content !== 'string' && typeof content !== 'number') {
            throw new Error('Content type is not string or number');
        }
    });

    element.innerHTML = '';

    contents.forEach(content => {
        let div = document.createElement('div');
        div.textContent = content;
        element.appendChild(div);
    });
};

solve('main-element-id', ['Content 1', 2, 'Content 3']);