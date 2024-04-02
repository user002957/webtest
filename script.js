function getData() {
    var dropdown1 = document.getElementById("dropdown1");
    var dropdown2 = document.getElementById("dropdown2");
    var output = document.getElementById("output");

    var selectedOption1 = dropdown1.options[dropdown1.selectedIndex].value;
    var selectedOption2 = dropdown2.options[dropdown2.selectedIndex].value;

    output.innerHTML = "Selected Option 1: " + selectedOption1 + "<br>" +
                       "Selected Option 2: " + selectedOption2;
}
