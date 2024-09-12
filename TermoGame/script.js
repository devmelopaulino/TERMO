class GrindButto {
    constructor() {

    }
}


let lastButtonSelect = null;

let gridButtons = document.querySelectorAll('.grid-item');

gridButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        SelectButton(button);
    });

    button.addEventListener('keydown', function (event) {
        console.log(`${event.key}`);
    });

});

function SelectButton(button) {
    if (lastButtonSelect) {
        ChangeButtonToUnselect(lastButtonSelect);
    }
    ChangeButtonToSelect(button);
}

function ChangeButtonToSelect(button)
{
    
    lastButtonSelect = button;
    button.classList.add('grid-item-select');
    button.classList.remove('grid-item');
}
function ChangeButtonToUnselect(button)
{
    button.classList.remove('grid-item-select');
    button.classList.add('grid-item');
}

