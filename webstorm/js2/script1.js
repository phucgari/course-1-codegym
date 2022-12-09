function calculate() {
    let physgrade=+document.getElementById("phys").value;
    let chemgrade=+document.getElementById("chem").value;
    let biograde=+document.getElementById("bio").value;
    let average= (physgrade+chemgrade+biograde)/3;
    alert("average grade is: "+ average);
}
function celtofah() {
    let fahcalced=((+document.getElementById("Cel").value)*9/5)+32;
    alert("your result is: " + fahcalced + " Farenheit")
}
function fahtocel() {
    let celcalced=((+document.getElementById("Fah").value)-32)*5/9;
    alert("your result is: " + celcalced + " Celsius")
}