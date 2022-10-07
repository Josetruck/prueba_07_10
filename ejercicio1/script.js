const array = ["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"]
/* var newArray = array.filter((elemento) => {return elemento}); */
var filtrados1 = array.filter((posicion,index) => index % 2 == 0)
console.log(filtrados1);
var filtrados2 = filtrados1.filter((elemento) => {
    if (elemento.charAt()=="t"||elemento.charAt()=="a")
    return elemento});
console.log(filtrados2);