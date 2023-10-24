let lastChar = '';
let calculated = false;  

function addToDisplay(value) {
    const currentDisplay = document.getElementById('display').value;

    // Replace '*' with 'x' for multiplication before adding to the display
    if (value === '*') {
        value = 'x';
    }

    if (calculated || currentDisplay === 'Error') {
        
        document.getElementById('display').value = value;
        calculated = false;
    } else if (isSymbol(lastChar) && isSymbol(value)) {
    
        return;
    } else {
        document.getElementById('display').value = currentDisplay + value;
    }

    lastChar = value;
}

function isSymbol(char) {
    return '+-x/()'.includes(char);  
}

function calculate() {
    const currentDisplay = document.getElementById('display').value;

    try {
        // Check if the last character is a symbol
        if (isSymbol(currentDisplay.slice(-1))) {
            // If the last character is a symbol, remove it and calculate
            const truncatedExpression = currentDisplay.slice(0, -1);
            const result = eval(truncatedExpression.replace(/x/g, '*'));
            document.getElementById('display').value = result;
        } else {
            // Otherwise, calculate the entire expression
            const result = eval(currentDisplay.replace(/x/g, '*'));
            document.getElementById('display').value = result;
        }

        calculated = true; 
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
    lastChar = '';
    calculated = false; 
}

function backspace() {
    const currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
    lastChar = currentDisplay.slice(-1);
    if (currentDisplay === 'Error') {
        calculated = false;  // Reset the calculated flag
    }
}
