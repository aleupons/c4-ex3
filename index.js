const { program } = require("commander");
const fs = require("fs");

program.option("--nombre, -n", "El nombre del usuario");
program.parse(process.argv);
console.log(program.opts());
