function estudiar (callback) {
    let termineDeEstudiar = false
    console.log ('estoy estudiando')
    console.log ('ya acabé :c')
    termineDeEstudiar = false
    if (termineDeEstudiar) callback(null, 'ya acabe a huevo')
    if (!termineDeEstudiar) callback('no puelo T.T', 'toy chiquito :c')
}

estudiar (function(error,mensaje){
    if(error) return console.error(error,mensaje)
    console.log (mensaje)
})
