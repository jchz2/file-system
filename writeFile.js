
const fs = require('fs')

fs.writeFile('creado.txt', 'Hola de nuevo desde node :D', 'utf8', (error) => {
    if(error){
        concole.error('error: ', error)
        return
    }
    console.log('Archivo escrito de nuevo exitosamente')
})