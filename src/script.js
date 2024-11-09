function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');
    const errorMessage = document.getElementById('error-message');
    
  
    errorMessage.textContent = '';
    resultElement.textContent = 'Result: ';


    if (isNaN(num1) || isNaN(num2)) {
        errorMessage.textContent = 'Please enter valid numbers in both fields.';
        return;
    }
    
    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                errorMessage.textContent = 'Division by zero is not allowed.';
                return;
            }
            result = (num1 / num2).toFixed(2); 
            break;
        default:
            errorMessage.textContent = 'Invalid operation.';
            return;
    }
    
    resultElement.textContent = `Result: ${result}`;
}
