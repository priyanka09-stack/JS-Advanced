//Sending data to DB


async function sendData(){


    const response = await fetch ('https://dummyjson.com/products/add',{
        method:'POST',
        headers:{
            "Content-type":"application/json"

        },
        body:JSON.stringify({
            title:"New Product",
            description:"This is a new product.",
            price:100,
            dicountPercentage:90,
            rating:4.5,
            stock:50,
            brand:"Haier",
            category:"Machine",

        })

    })
    const data = await response.json()
    console.log(data)

}
sendData()

//Local Storage

//To store data in Local Storage
localStorage.setItem("name","Priyanka")
localStorage.setItem("age",18)



//To print it on console
console.log(localStorage.getItem("name","Priyanka"))
console.log(localStorage.getItem("age",18))


//Modifying data
localStorage.setItem("name", "Harry Potter")

//To remove data from Local Storage
localStorage.removeItem("name")
console.log(localStorage.getItem("name","Priyanka"))



//Sesion Storage  -- Temporarily Stored

//Storing data in session storage 
sessionStorage.setItem("name","Riiiiii")
sessionStorage.setItem("age",18)



//Printing Data on Console
console.log(sessionStorage.getItem("name"))
console.log(sessionStorage.getItem("age"))

//Removing data from Session Storage
sessionStorage.removeItem("name")