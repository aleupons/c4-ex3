const guardarSaludo = (nombre) => {
  fs.writeFile(
    "textos/saludo.txt",
    `Hola, ${nombre}. Encantado de saludarte.`,
    (err) => {
      if (err) {
        console.log(err.message);
        return;
      }
    }
  );
};

module.exports = {
  guardarSaludo,
};
