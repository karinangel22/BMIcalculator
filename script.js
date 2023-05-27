function calculateBMI() {
    var weightInput = document.getElementById('weight');
    var heightInput = document.getElementById('height');
    var resultElement = document.getElementById('result');

    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value) / 100; // Konversi ke meter

    if (weight && height) {
        var bmi = weight / (height * height);
        resultElement.innerHTML = 'Your BMI is ' + bmi.toFixed(2);
    } else {
        resultElement.innerHTML = 'Please enter valid weight and height.';
    }
}