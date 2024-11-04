let operador="";
let resultado=0;
let num1=2;
let num2=2;
mensaje=""
switch (operador) {
    case "+":
        resultado = num1+num2;
        mensaje = "el resultado de sumar "+num1+" + "+num2+" es:"+resultado;
        break;
    case "-":
        resultado = num1-num2;
        mensaje = "el resultado de restar "+num1+" - "+num2+" es:"+resultado;
        break;
    case "*":
        resultado = num1*num2;
        mensaje = "el resultado de multiplicar "+num1+" * "+num2+" es:"+resultado;
        break;
    case "/":
        resultado = num1/num2;
        mensaje = "el resultado de dividir "+num1+" / "+num2+" es:"+resultado;
        break;

    default:
        mensaje="las operaciones aceptadas son:sumar-restar-multiplicar-dividir"
        break;
}
console.log(mensaje)