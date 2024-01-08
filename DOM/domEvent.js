function solve(dom){
 
    if (typeof dom === 'string') {
        element = document.getElementById(dom);

        if (element === null) {
            throw new Error('Id does not exist');
        }
    }
    else if (!(dom instanceof Element)) {
        throw new Error('Provided first parameter is not corect');
    }

    let buttons = element.querySelectorAll('.button');
    
        buttons.forEach(button => {
            button.innerHTML = 'hide';
            button.addEventListener('click', function() {
                let nextElement = button.nextElementSibling;
                while (nextElement) {
                    if (nextElement.classList.contains('content')) {
                        if (nextElement.style.display === 'none') {
                            nextElement.style.display = '';
                            button.innerHTML = 'hide';
                        } else {
                            nextElement.style.display = 'none';
                            button.innerHTML = 'show';
                        }
                        break;
                    }
                    nextElement = nextElement.nextElementSibling;
                }
            });
        });
};
solve('root');