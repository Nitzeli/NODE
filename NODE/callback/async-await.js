/*
// async / await 

// async asincrono
// await esperar

async function queryDB (){
    const respuestaDB = await db.select('koders')
    await db.select('mentores')
    console.log ('respuestaDB', respuestaDB)
}

async function otraAsync (){......}

async function main ( ){
    const query = await queryDB ( )
    const otra = await otraAsync ()
}

main()
.then ()
.catch ()

// top level await esto no lo podemos hacer en node ni JS solo en DNode 
await db.select('koders') 
.then()
.catch ()

queryDB() // promise (pending)*/

/*

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


async function main (){
    const builtWall = await build ({})
    const planishedWall = await planish (builtWall)
    const paintedWall = await paint (planishedWall)

    console.log ('paintedWall' , paintedWall)
    return paintedWall
}

main ()
.then ((resultado)=>{
    console.log ('done!!')
})
.catch( error =>{
    console.error ('error', error)
})


const newKoder = {
    isInterviewed: false,
    isOffered: false,
    isReserved: false,
    isEnroll: false
    }
    
*/




function interview (koderInterviewed){
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            koderInterviewed.isInterviewed = true;
            koderInterviewed.isInterviewed  ? resolve (koderInterviewed) : reject ('cannot reserved')
            
        }, 3000);
    })
}


function offer (koderOffered){
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            koderOffered.isOffered = true;
            koderOffered.isOffered ? resolve (koderOffered) : reject ('cannot reserved')
            
        }, 3000);
    })
}


function reserv (koderReserved){
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            koderReserved.isReserved = true;
            koderReserved.isReserved ? resolve (koderReserved) : reject ('cannot reserved')
            
        }, 3000);
    })
}

function assist (koderEnrolled){
    return new Promise ((resolve, reject) =>{
        setTimeout(() => {
            koderEnrolled.isEnroll = true;
            koderEnrolled.isEnroll ? resolve (koderEnrolled) : reject ('cannot assist class :(')
            
        }, 3000);
    })
}

async function main (){
    const koderInterview = await interview ({})
    const koderOfertado = await offer (koderInterview)
    const koderReservo = await reserv (koderOfertado)
    const koderInscrito = await assist (koderReservo)

    console.log ('koderInscrito' , koderInscrito)
    return koderInscrito
}

main ()
.then ((resultado)=>{
    console.log ('ya estas dentro!!')
})
.catch( error =>{
    console.error ('error', error)
})
