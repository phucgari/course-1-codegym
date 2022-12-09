let fro;
let t;

function forexcal(fro,t){
    let USDin;
    if(fro=="VND") {
        USDin = document.getElementById("num").value/23000;
    }
    if(fro=="USD") {
        USDin = document.getElementById("num").value;
    }
    let result
    if(t=="VND") result=USDin*23000
    if(t=="USD") result=USDin

    document.getElementById("result").innerHTML= "your result is: " + result + " "+ document.getElementById("to").value
}