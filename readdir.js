const fs = require('fs');

fs.readdir('dirNode/', 'utf8',(error,files) => {
  if (error) {
    console.error('error: ', error)
    return
  }
  console.log('Leyendo directorio: ', files
});
