var rect = require('./rectange')

function calRect(a,b){

    rect(a,b ,(err,func)=>{
        if(!err){
            console.log("Perimeter Of Rectange"+func.perimeter())
            console.log("Area Of Rectange"+func.area())
        }else{
            console.log("Side should Be Greater Than ZERO")
        }
        
    })
    console.log("End of Function")       
}

calRect(4,6)
calRect(12,9)
calRect(0,7)