const fs = require('fs')

fs.appendFile('creado.txt',' Agregando texto desde Node.js', 'utf8', (error, data) => {
  if (error) {
    console.error('error: ', error)
    return
  }
  console.log("Texto agregado: ", data)
});