function calcular() {
    var numero1 = parseInt(document.getElementById("numero1Number").value);
    var numero2 = parseInt(document.getElementById("numero2Number").value);
    
    var resultado = 0;

    if (numero1 == 0) {
        window.alert("Ingrese un primer número.");
        return;
    }
    if (numero2 == 0) {
        window.alert("Ingrese un segundo número.");
        return;
    }

    // window.alert("Numero 1: " + numero1 + " Numero 2: " + numero2);
    var operacion = document.querySelector("input[name=operacion]:checked").value;

    switch (operacion) {
        case "suma":
            resultado = numero1 + numero2;
            break;
        case "resta":
            resultado = numero1 - numero2;
            break;
        case "multiplicacion":
            resultado = numero1 * numero2;
            break;
        case "division":
            resultado = numero1 / numero2;
            break;
    };
    // window.alert(resultado);
    document.getElementById("resultadoNumber").value = resultado;
    // window.alert("Operación: " + operacion);
    document.getElementById("radiosFieldset").disabled = true;
    document.getElementById("numerosFieldset").disabled = true;
    document.getElementById("calcularDiv").style.display = "none";
    document.getElementById("limpiarDiv").style.display = "block";
    document.getElementById("resultadoDiv").style.display = "block";
}

function limpiar(){
    document.getElementById("sumaRadio").checked = true;
    document.getElementById("numero1Number").value = 0;
    document.getElementById("numero2Number").value = 0;
    document.getElementById("resultadoNumber").value = 0;

    document.getElementById("radiosFieldset").disabled = false;
    document.getElementById("numerosFieldset").disabled = false;
    document.getElementById("calcularDiv").style.display = "block";
    document.getElementById("limpiarDiv").style.display = "none";
    document.getElementById("resultadoDiv").style.display = "none";
}