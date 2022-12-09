function calculate() {
    let physgrade=+document.getElementById("phys").value;
    let chemgrade=+document.getElementById("chem").value;
    let biograde=+document.getElementById("bio").value;
    let average= (physgrade+chemgrade+biograde)/3;
    alert("average grade is: "+ average)
}