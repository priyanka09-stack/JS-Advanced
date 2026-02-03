const p= new Promise((res,rej)=>{
    let work_done = true;
    setTimeout(()=>{
        if (work_done){
            console.log("Work Done , Fulfilled!!!!!!!!!!!")}
        else{
            console.log("Not Done , Rejected")
        }
    },8000)

})
console.log(p)
