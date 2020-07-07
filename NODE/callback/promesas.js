
// tiene una función constructora
/*
new Promise () // regresa objeto de tipo promesa (esta tiene un status pendiente, aceptada o rechazada)
// recibe como parametro una función (ejecutora)

new Promise (( resolve, reject)=>{  //esos parametros son funciones, las podemos llamar eb cualquier momento
if ('todo OK') resolve ('ok') // es lo que voy a recibir cuando la promesa pase de pendiente a resuelto
if ('not ok') reject ('upsss!') // de pendiente a rechazado, este ejemplo se esta haciendo manualmente
})

//promises casi siempre esta envuelto en alguna función

function algoAsincrono(){
    return new Promise((resolve, reject)=>{
        if ('todo OK') resolve ('ok')
        if ('not ok') reject ('upsss!') 
    })
}

algoAsincrono ()
.then((result)=>{
    console.l
console.log ('se resolvio')
}) // se le puede pasar una funcion cuando todo este OK
.catch (()=>{
    console.log ('hubo un error')
})*/

function build (wallToBuild){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            wallToBuild.isBuild = true

            if (wallToBuild.isBuild){
                resolve(wallToBuild)
            }else{
                reject('cannot build')
            }
        },3000)
    })
}

function planish (wallToPlanish){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            wallToPlanish.isPlanished = true

            if (wallToPlanish.isPlanished){
                resolve(wallToPlanish)
            }else{
                reject('cannot planish')
            }
        },2000)
    })
}

function paint (wallToPaint){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            wallToPaint.isPainted = true

            if (wallToPaint.isPainted){
                resolve(wallToPaint)
            }else{
                reject('cannot paint')
            }
        },2000)
    })
}



build({})
    .then((builtWall) => {
        console.log('built Wall', builtWall)
        planish(builtWall)
            .then((planishWall) => {
                console.log('planish wall', planishWall)
                paint(planishWall)
                    .then((paintWall) => {
                        console.log('painted wall', paintWall)
                    })
            })

            .catch((errorPaint) => {
                console.error('painted wall', errorPaint)
            })
            .catch((errorPlanish) => {
                console.error('planish error:', errorPlanish)
            })
    })
    .catch((error) => {
        console.error('build error:', error)
    })
