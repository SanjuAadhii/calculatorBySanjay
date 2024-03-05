let display = document.getElementById('display');
let currentInput = '';

document.addEventListener('keydown', function (event) {
    const key = event.key;

    if (/[\d.+\-*/%=]/.test(key)) {
        event.preventDefault();
        handleKeyPress(key);
    } else {
        alert('Only numbers and basic operators (+, -, *, /, %) are allowed');
    }
});

function handleKeyPress(key) {
    switch (key) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            setOperation(key);
            break;
        case '=':
            calculate();
            break;
        default:
            appendCharacter(key);
            break;
    }
}

function appendCharacter(character) {
    currentInput += character;
    display.value = currentInput;
}

function setOperation(operator) {
    if (currentInput !== '') {
        currentInput += operator;
        display.value = currentInput;
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        alert('Invalid expression!');
        clearDisplay();
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}
