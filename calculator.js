function buttonClick(value) {
    
}

function init() {
    document
    .querySelector('.calc-buttons')
    .addEventListener("click",function (event) {
        buttonClick(event.target.value);
    })
}

init();