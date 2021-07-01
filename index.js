const { program } = require("commander");
const { guardarSaludo } = require("./utilidades/archivos.js");
const chalk = require("chalk");

program.option("-n,--nombre <nombre>", "El nombre del usuario");
program.parse(process.argv);

const opcions = program.opts();
if (opcions.nombre) {
  guardarSaludo(opcions.nombre);
} else {
  console.log(
    chalk.yellow("No se ha enviado el nombre (node index --nombre=Marius)")
  );
  process.exit(1);
}
