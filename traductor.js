let palabra = "puerta"
let mensaje = ""
switch (palabra) {
    case "perro":
        mensaje = "dog"
        break;
    case "gato":
        mensaje = "cat"
        break;
    case "puerta":
        mensaje = "dor"
        break;
    case "ventana":
        mensaje = "window"
        break;
    case "mesa":
        mensaje = "table"
        break;

    default:
        mensaje ="La palabra ingresada es incorrecta"
        break;
}
console.log(mensaje)