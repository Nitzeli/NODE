
const fs = require ('fs')

fs.copyFile('otro-archivo.txt', 'copiando_archivo.txt',(error)=>{
    if (error)return console.log('no copiaste bien')

    console.log ('se copio biens')
})
