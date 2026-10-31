function clickNumbers(buttons) {
    let number = document.getElementById("Calculation").value;
    number += buttons.value;

    document.getElementById("Calculation").value = number;
}

function clickOperators(buttons) {
    let txtValue = document.getElementById("Calculation").value;

    if (txtValue == "") {
        return;
    }

    if (buttons.value == "+") {
        txtValue = txtValue + "+";

    } else if (buttons.value == "−") {
        txtValue = txtValue + "-";

    } else if (buttons.value == "×") {
        txtValue = txtValue + "*";

    } else if (buttons.value == "÷") {
        txtValue = txtValue + "/";
    }

    document.getElementById("Calculation").value = txtValue;

}

function clikFunctions(buttons) {
    if (buttons.value == "C") {

        document.getElementById("Calculation").value = "";
        document.getElementById("results").value = "";

    } else if (buttons.value == "AC") {
        document.getElementById("History").value = "";
    }
}


function clickCalculatorProcess() {
    let txtValue = document.getElementById("Calculation").value;

    let operator = "";

    if (txtValue.includes("+")) {
        operator = "+";

    } else if (txtValue.includes("-")) {
        operator = "-";

    } else if (txtValue.includes("*")) {
        operator = "*";

    } else if (txtValue.includes("/")) {
        operator = "/";
    }

    let numbers = txtValue.split(operator);

    let num1 = Number(numbers[0]);
    let num2 = Number(numbers[1]);

    let result = 0;

    if (operator == "+") {
        result = num1 + num2;
    } else if (operator == "-") {
        result = num1 - num2;
    } else if (operator == "*") {
        result = num1 * num2;
    } else if (operator == "/") {
        result = num1 / num2;
    }

    document.getElementById("results").value = result;

    document.getElementById("History").value = txtValue + " = " + result;

}