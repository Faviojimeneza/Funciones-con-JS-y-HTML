
var z = function division(x,y){
    return x/y
}

  function divisionforma2 (x,y){
    return x/y
}

var m = function multiplicacion (x,y){
    return x*y
}

z= function divisionforma2 (x,y){
    console.log("El valor de x es:" + x)
    return x/y
}

function division (x,y){
    return x/y
}

function realizarDivision(){
    var num1 = document.getElementById("numerador").value
    var num2 = document.getElementById("divisor").value
    document.getElementById("resDivision").innerHTML=division(num1,num2)
}

 
document.getElementById("resDivision").innerHTML= z(10,2)
//document.getElementById("resDivision2").innerHTML= divisionforma2 (20,5)
//document.getElementById("resMultiplicacion").innerHTML=m (5,4)

function eventoCargado(){
    alert= ("Ya Cargó")
}