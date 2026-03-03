var numbersArray = [];

function insertNumber() {
    var value = parseFloat(document.getElementById("numberInput").value);

    if (!isNaN(value)) {
        numbersArray.push(value);

        document.getElementById("numbers").innerHTML = numbersArray.join(", ");

        calculate();
    }

    document.getElementById("numberInput").value = "";
}

function calculate() {
    var sum = 0;
    var highest = numbersArray[0];
    var lowest = numbersArray[0];

    for (var i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i];

        if (numbersArray[i] > highest) {
            highest = numbersArray[i];
        }

        if (numbersArray[i] < lowest) {
            lowest = numbersArray[i];
        }
    }

    document.getElementById("sum").innerHTML = sum;
    document.getElementById("highest").innerHTML = highest;
    document.getElementById("lowest").innerHTML = lowest;
}

function deleteAll() {
    numbersArray = [];

    document.getElementById("numbers").innerHTML = "";
    document.getElementById("sum").innerHTML = "";
    document.getElementById("highest").innerHTML = "";
    document.getElementById("lowest").innerHTML = "";
}