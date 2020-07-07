
const wall = {
isBuilt: false,
isPlanished: false,
isPainted: false
}

function build (wallToBuild, callback){
    console.log ('build')
    setTimeout ( () =>{
        wallToBuild.isBuilt = true

        const error = wallToBuild.isBuilt
        ? null
        : 'cannot build'
        
        callback(error , wallToBuild) 
        
    }, 3000)
}

function planish (wallToPlanish , callback){
console.log ('planish')

setTimeout (() => {
    wallToPlanish.isPlanished = true

    const error = wallToPlanish.isBuilt
        ? null
        : 'cannot planish'

        callback(error , wallToPlanish) 
}, 2000)
}

function paint (wallToPaint, callback){

    setTimeout (() => {
        wallToPaint.isPainted = true

        const error = wallToPaint.isPainted
        ? null
        : 'cannot paint'
        callback(error , wallToPaint) 
}, 4000 )
}

build (wall, (error, wallBuilt)=>{
    if (error) return console.error ('error in build')

   planish (wallBuilt, (planishError,wallPlanished)=>{
    if (planishError) return console.error ('error en planish')

       paint (wallPlanished, (paintError,wallPainted)=>{
           if (paintError) return console.error('error en paint')
           console.log ('wallPainted:', wallPainted)
       })
   })
})

