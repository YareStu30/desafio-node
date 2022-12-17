const { registrar, leer } = require("./operaciones");

const [, , nombre, edad, animal, color, enfermedad] = process.argv;

if (nombre && edad && animal && color && enfermedad) {
  registrar(nombre, edad, animal, color, enfermedad);
} else {
  leer();
}
