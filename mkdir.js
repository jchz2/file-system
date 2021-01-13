const fs = require('fs')

	fs.mkdir('dirNode/', (error) => {
  if (error) {
    console.error('error: ', error)
    return
  }
    console.log(" ¡Dierctorio creado con exito! ")
});
