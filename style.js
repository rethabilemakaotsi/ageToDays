function validateInput(ageInYears) {
    
    return !isNaN(ageInYears) && ageInYears >= 0;
}


function convertToDays(ageInYears) {
    
    return ageInYears * 4 * 365;
}


function displayResult(days) {
    document.getElementById('result').textContent = `Result: ${days} days`;
}


function convertAgeToDays() {
    const yearsInput = document.getElementById('yearsInput').value;

    
    if (!validateInput(yearsInput)) {
        alert('Invalid input. Please enter a valid non-negative number.');
        return;
    }

    
    const days = convertToDays(parseFloat(yearsInput));

    
    displayResult(days.toFixed(2));
}


