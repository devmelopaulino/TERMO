class GrindButto{
    constructor() {

    }
}

let lastSelect;

let gridButton = document.querySelectorAll('.grid-item');

gridButton.forEach(function(button) {
    button.addEventListener('click', function() {
        lastSelect = button;
        console.log(lastSelect);
    });
});

