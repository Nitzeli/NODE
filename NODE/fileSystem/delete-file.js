

const fs = require ('fs')

fs.unlink('hola.txt',(error)=>{
    if(error) return console.log('no se pudo eliminars :( why??')

    console.log('tu archivo se elimino, aioos')
})