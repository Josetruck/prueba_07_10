
var empleados = [
    { "Nombre": "John", "Apellido": "Doe"},
    { "Nombre": "Anna", "Apellido": "Smith"},
    { "Nombre": "Pedro", "Apellido": "Jones"}
    ]
function añadir(){
var nuevoempleado = { "Nombre": `${document.getElementById("nombre").value}`, "Apellido": `${document.getElementById("apellido").value}`};
empleados.push(nuevoempleado);
}

var nombre = document.getElementById("nombre2");
buscado = {};
function buscar(nombre){
    for(let i=0; i<empleados.length;i++){
        if(nombre == JSON.stringify(empleados[i].Nombre)){
            buscado = empleados[i]
        }
    }
console.log(buscado)}
