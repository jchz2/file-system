
const fs = require('fs')

fs.unlink('creado.txt', (error) => {
    if(error){
        concole.error('error: ', error)
        return
    }
    console.log('\nEliminando el archivo: creado.txt')
})