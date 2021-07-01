const fs = require("fs");
const chalk = require("chalk");

const guardarSaludo = (nombre) => {
  fs.writeFile(
    "textos/saludo.txt",
    `Hola, ${nombre}. Encantado de saludarte.`,
    (err) => {
      if (err) {
        console.log(
          chalk.red.bold(
            `La operación de guardar el saludo ha dado un error:\n ${err.message}`
          )
        );
        process.exit(1);
      }
    }
  );
};

module.exports = {
  guardarSaludo,
};
