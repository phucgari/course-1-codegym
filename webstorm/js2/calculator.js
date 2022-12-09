function plus(){
    let result=(+document.getElementById("num1").value)+(+document.getElementById("num2").value)

    document.getElementById("result").innerHTML=result
}
function minus(){
    let result=(+document.getElementById("num1").value)-(+document.getElementById("num2").value)

    document.getElementById("result").innerHTML=result
}
function div(){
    let result=(+document.getElementById("num1").value)/(+document.getElementById("num2").value)

    document.getElementById("result").innerHTML=result
}
function mul(){
    let result=(+document.getElementById("num1").value)*(+document.getElementById("num2").value)

    document.getElementById("result").innerHTML=result
}