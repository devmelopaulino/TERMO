class GrindButto{
    constructor() {

    }
}


let lastButtonSelect = null;

let gridButtons = document.querySelectorAll('.grid-item');

gridButtons.forEach(function(button) {
    button.addEventListener('click', function() {      
        if(lastButtonSelect != null)
        {
            lastButtonSelect.classList.remove('grid-item-select');
            lastButtonSelect.classList.add('grid-item');
        }
        lastButtonSelect = button;
        button.classList.remove('grid-item');
        button.classList.add('grid-item-select');
    });

    button.addEventListener('keydown', function(event) {
        console.log('Tecla pressionada:', event.key); 
    });

});

