const fs = require("fs");

const registrar = (nombre, edad, animal, color, enfermedad) => {
  const data = {
    nombre,
    edad,
    animal,
    color,
    enfermedad,
  };
  const dataJSON = JSON.stringify(data);
  fs.writeFileSync("citas.json", dataJSON);
};

const leer = () => {
  fs.readFile("citas.json", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(JSON.parse(data));
  });
};

module.exports = {
  registrar,
  leer,
};
