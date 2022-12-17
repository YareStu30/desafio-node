const { read, registrar} = require('./operacion')
const argumentos = process.argv.slice(2)
const operacion = argumentos[0]
const [registrar,nombre, edad, animal, color, enfermedad]= argumentos;



if(operacion === "registro"){
    registrar(nombre, edad, animal, color, enfermedad);
    }

if(operacion === "read"){
    read()
    }