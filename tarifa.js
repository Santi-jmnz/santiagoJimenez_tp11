let pagoMes = 30000;
let consumoKWH = 250;
(consumoKWH>=300)? (pagoTotal=(pagoMes*20/100)+pagoMes, console.log("Debido a que su hogar tuvo un consumo de 450kwh, en base al ajuste \n tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%),\n cumplimos con informarle que se ha ajustado el total a pagar, que será de $"+pagoTotal)) : console.log("Usted mantiene su subsidio ") ;