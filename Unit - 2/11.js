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
            discountPercentage:90,
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
console.log(localStorage.getItem("name"))
console.log(localStorage.getItem("age"))


//Modifying data
localStorage.setItem("name", "Harry Potter")

//To remove data from Local Storage
localStorage.removeItem("name")
console.log(localStorage.getItem("name","Priyanka"))



//Session Storage  -- Temporarily Stored

//Storing data in session storage 
sessionStorage.setItem("name","Riiiiii")
sessionStorage.setItem("age",18)



//Printing Data on Console
console.log(sessionStorage.getItem("name"))
console.log(sessionStorage.getItem("age"))

//Removing data from Session Storage
sessionStorage.removeItem("name")

//Cookie Storage

document.cookie ="name=Priyanka; expires=Fri, 31 Dec 2024 23:59:59 UTC; "
document.cookie ="age=18; expires=Fri, 01 Mar 2026 23:59:59 UTC; "

console.log(document.cookie)


//Generator Function

function* numGenerator(){
    //yield 1
    //yield 2
    //yield 3
    let index= 2501730192
    while(true){
        yield index
        index++
    }
}

const gen = numGenerator()
console.log(gen)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())


//Currying
//Normal Function
function add(a,b,c){
    return a+b+c  
}
console.log(add(1,2,3))


//Currying Function

function sum(a){
    return function (b){
        return function(c){
            return a+b+c
        }
    }
}

const first = sum(1)                      //Step-by-step argument passing
console.log(first)
const second = first(2)
console.log(second)
console.log(second(3))

console.log(sum(1)(2)(3))      //Multiple arguments passed  at once



