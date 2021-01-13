const fs = require('fs')

fs.rmdir('dirNode/',(error) => {
  if (error) {
    console.error('error: ', error)
    return
  }
  console.log('Eliminando directorio: dirNode')
});
