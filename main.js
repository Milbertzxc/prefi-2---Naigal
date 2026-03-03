<!DOCTYPE html>
<html>
<head>
    <title>JS Exercise 1</title>
</head>
<body>

    <h1>JS Exercise 1</h1>

    <label>Enter First Number:</label>
    <input type="text" id="firstNumber"><br><br>

    <label>Enter Second Number:</label>
    <input type="text" id="secondNumber"><br><br>

    <button onclick="calculate()">Calculate</button>
    <button onclick="clearAll()">Clear</button>

    <br><br>

    <p>Sum: <span id="sum"></span></p>
    <p>Difference: <span id="difference"></span></p>
    <p>Product: <span id="product"></span></p>
    <p>Quotient: <span id="quotient"></span></p>

    <script>
        function calculate() {

            var num1 = parseFloat(document.getElementById("firstNumber").value);
            var num2 = parseFloat(document.getElementById("secondNumber").value);

            var sum = num1 + num2;
            var difference = num1 - num2;
            var product = num1 * num2;
            var quotient = num1 / num2;

            document.getElementById("sum").innerHTML = sum;
            document.getElementById("difference").innerHTML = difference;
            document.getElementById("product").innerHTML = product;
            document.getElementById("quotient").innerHTML = quotient;
        }

        function clearAll() {
            document.getElementById("firstNumber").value = "";
            document.getElementById("secondNumber").value = "";
            document.getElementById("sum").innerHTML = "";
            document.getElementById("difference").innerHTML = "";
            document.getElementById("product").innerHTML = "";
            document.getElementById("quotient").innerHTML = "";
        }
    </script>

</body>
</html>