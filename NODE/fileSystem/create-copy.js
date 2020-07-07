

const fs = require ('fs')
const copy = (source,destination)=>{
    fs.copyFile(source,destination, error =>{
    if (error) return console.log('no se pudo copiar el archivo')
    console.log (`${source} se copio correctamente`)
})
}

const create = (fileName,data, destination)=>{
    fs.writeFile(fileName,data,'utf8', (error)=>{
        if(error) return console.log('no se pudo crear el archivo')
        console.log('si se creó el archivo')
        copy(fileName,destination)
        fs.unlink(fileName,(error)=>{
            if(error)return console.log ('no se pudo eliminar el archivo')

            console.log('se elimino correctamente el archivo "nuevo2" ')
        })
    })
}

create('nuevo2.txt','funcion nueva', 'nuevo3.txt')