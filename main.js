function generateFullName() {
    var first = document.getElementById("firstName").value;
    var middle = document.getElementById("middleName").value;
    var last = document.getElementById("lastName").value;

    var fullName = first + " " + middle + " " + last;

    document.getElementById("fullName").innerHTML = fullName;
}

function clearEntries() {
    document.getElementById("firstName").value = "";
    document.getElementById("middleName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("fullName").innerHTML = "";
}