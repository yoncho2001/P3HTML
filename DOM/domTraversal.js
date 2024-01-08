function solve1(){
    const  asideElement = document.getElementsByTagName('aside');
    
    for (const child of asideElement[0].children) {
        if (!child.classList.contains('special-anchor')) {
            console.log(child.innerHTML);   
        }
    }
};

function solve2(){
    const  elements = document.getElementsByClassName('special-anchor');
    
    /*for (const child of elements) {
       console.log(child.innerHTML);   
    }*/

    for (const child of elements) {
        if (child.style.backgroundColor === 'red') {
            console.log(child.innerHTML);
        }
    }
};


function solve3() {
    var mainElement = document.getElementById('main-element-id');
    var anchors = mainElement.querySelectorAll('a.special-anchor');
    anchors.forEach(element => {
        if (element.style.backgroundColor !== 'red') {
            console.log(element.innerHTML);
        }
    });    
}
//solve1();
