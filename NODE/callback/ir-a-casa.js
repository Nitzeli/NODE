
// definición de la función

function irACasa (callback = () =>{}){
    let estoyEnCasa = false
    console.log ('Estoy caminando a casa')
    estoyEnCasa = false
    if (estoyEnCasa) callback(null, 'todo cool')
    if (!estoyEnCasa) callback('ayudaa', 'me perdí')

}

//llamar la función (callback es irACasa)

irACasa((error,frase)=>{
    if(error) return console.error(error,frase)

    console.log (frase)
    console.log ('soy la funcion anonima')
})