
const fs = require ('fs')

fs.writeFile('nuevo.txt','hola mundo desde Node','utf8',(error)=>{
    if(error) return console.log('no se pudo copiars el archivo')

    console.log ('se copio el archivo')

})

