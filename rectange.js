module.exports=(a,b,callBack)=>{
    if(a<=0||b<=0){
        setTimeout(()=>
        callBack(new Error("Side Of Rectangle should be greater than ZERO"),null)
        ,2000)
    }else{
        setTimeout(()=>
        callBack(null,
            {
                perimeter : ()=>(2*(a+b)),
                area : ()=> a*b
            })
        ,2000)
    }
}




