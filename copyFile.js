const fs = require('fs')

fs.copyFile('creado.txt',' copia_creado.txt', (error, data) => {
  if (error) {
    console.error('error: ', error)
    return
  }
  console.log("Archivo copiado", data)
});