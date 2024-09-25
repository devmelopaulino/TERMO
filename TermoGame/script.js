let bodyElement = document.querySelector('.body');
console.log(bodyElement);

bodyElement.addEventListener('click', function () {
        CaptureIfButtonWasSelect(button);
});

//Global variable to indicate the last selected button.
let lastSelectedButton = null;

//Capture the button grid on the HTML page 
let gridButtons = document.querySelectorAll('.grid-item');

//Associate events with the individual elements.
gridButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        CaptureIfButtonWasSelect(button);
    });
    button.addEventListener('keydown', function (event) {
        CaptureIfAnyKeyOnKeyboardWasPress(event.key);       
    });
});

function CaptureIfAnyKeyOnKeyboardWasPress(key){
    if(key === "Backspace")
    {
        DeleteLetter();
    }
    if(isLetter(key))
    {
        AddLetter(key);
    }
}

function AddLetter(letterToAdd)
{
    lastSelectedButton.innerHTML = letterToAdd.toUpperCase();
}

function DeleteLetter()
{
    lastSelectedButton.innerHTML = "";
}

function CaptureIfButtonWasSelect(button) {

    if (lastSelectedButton) {
        ChangeButtonToUnselectState(lastSelectedButton);
    }
    ChangeButtonToSelectState(button);
}

function ChangeButtonToSelectState(button)
{
    lastSelectedButton = button;
    button.classList.add('grid-item-select');
    button.classList.remove('grid-item');
}
function ChangeButtonToUnselectState(button)
{
    button.classList.remove('grid-item-select');
    button.classList.add('grid-item');
}

function isLetter(key) {
    return /^[a-zA-Z]$/.test(key);
}

