//Async & Await - For cleaner Asynchronous Code - We can only use it  when promise is used ..



function orderFood(){
    return new Promise ((res , rej)=>{
        setTimeout(()=>{
            console.log("Food Ordered")
            res("Food Ordered Successfully")
        },2000)
    })
}

function PrepareFood(){
    return new Promise ((res , rej)=>{
        setTimeout(()=>{
            console.log("Food Prepared")
            res()
        },2000)
    })
}


function deliverFood(){
    return new Promise ((res , rej)=>{
        setTimeout(()=>{
            console.log("Food Delivered")
            res()
        },2000)
    })
}

//Promise Chaining
/*
orderFood().then((data)=>{
    return PrepareFood()
}).then((data)=>{
    return deliverFood()
}).then((data)=>{

}).catch((err)=>{
    console.log("Something went wrong ..")
})

*/
async function Order(){
    const data = await orderFood()
    console.log(data)
    //await orderFood()
    await PrepareFood()
    await deliverFood()
}

Order()

// Error Handling 
//Try - Catch -- For run time errors only

console.log("First Line")
try{
    let sample= 244
    //let sample = 444           -- Compile Time Error 
    console.log(sample)
    console.log("After Samplee ..")
}catch(e){
    console.log(e)
}

console.log("Last Line")


//Throw new error -- To customize error

try{
    let age = 16;
    if (age<18){
        throw new Error("You aren't eligible to vote ..")
        //console.log("Line after throw new error ..") -- Unreachable after try block
            }

}catch(e){
    console.log(e)
    console.error(e) 
    console.warn(e)  
}

async function getData(){
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json()
    console.log(data)
    console.log(data.products[0])
    data.products.forEach((product) => {
        console.log(product.title)
        
    })

}

getData()
