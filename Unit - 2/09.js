/*const p= new Promise((res,rej)=>{
    let work_done = true;
    setTimeout(()=>{
        if (work_done){
            res({name:"Priyanka",age:18})}
        else{
            rej("Not Done , Rejected")
        }
    },8000)

})
console.log(p)

p.then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err) 
}).finally(()=>{
    console.log("Finally Block !!!!!!!!!!!")
})*/

function dohw(){
    const p = new Promise((res,rej)=>{
        setTimeout(()=>{
            let done = true;
            if (done){
                console.log("HW Done !!")
                res("Done!!!!!!!!!!!")

            }
            else{

                rej("Not done !!!!!!!!!!!!!!!!!!!11")

            }
        },2000)
    })
    return p
}


function dinner(){
    const w = new Promise((res , rej)=>{
        setTimeout (()=>{
            let ate =true
            if(ate){
                console.log("Tastyyyyyyyyyyy!!")
                res("ateeeeeeee!")
            }

            else{
                rej("Didn't ate!!!!!!!!!!1")
            }
        },2000)
    })
    return w
}



function  play(){
    const z =new Promise((res ,  rej)=>{
        setTimeout(()=>{
            let played = true
            if (played){
                console.log("Football")
                res("Hockey")
            }

            else{
                rej(":))")
            }
        },2000)
    })
    return z
}

dohw().then((msg)=>{

    console.log(msg)

    return dinner()
}).then((msg)=>{

    console.log(msg)

    return play()

}).then((msg)=>{
    console.log(msg)

}).catch((err)=>{
    console.log(err)

}).finally(()=>{
    console.log("Sleeppppppppppppppppppppppppppppp")

})


/*dohw().then((msg)=>{
    return dinner()
}).then((msg)=>{
    return play()
}).then((mmsg)=>{

}).catch((err)=>{

}).finally(()=>{
    
})*/




console.log("Indus")                                                       //Event Loop - Call Stack

setTimeout(()=>{                                                           //Web API   - Low Priority
    console.log("a")

},0)

const uu = new Promise((res , rej)=>{                                    //Priority Queue- High Priority
    res()
})
uu.then(()=>{
    console.log("Corals")
})

console.log("Reefs")                                                     //Call Stack