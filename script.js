document.addEventListener("DOMContentLoaded", function() {
    const convertButton = document.getElementById("convertButton");
    convertButton.addEventListener("click", convertUnits);

    function convertUnits() {
        const inputValue = parseFloat(document.getElementById("inputValue").value);
        const fromUnit = document.getElementById("fromUnit").value;
        const output = document.getElementById("output");

        let result;

        switch (fromUnit) {
            case "meters":
                result = inputValue * 3.28084;
                output.innerHTML = `${inputValue} meters is ${result} feet`;
                break;
            case "feet":
                result = inputValue * 12;
                output.innerHTML = `${inputValue} feet is ${result} inches`;
                break;
            case "inches":
                result = inputValue * 2.54;
                output.innerHTML = `${inputValue} inches is ${result} centimeters`;
                break;
            case "centimeters":
                result = inputValue / 2.54;
                output.innerHTML = `${inputValue} centimeters is ${result} inches`;
                break;
            default:
                output.innerHTML = "Invalid unit";
        }
    }
});
