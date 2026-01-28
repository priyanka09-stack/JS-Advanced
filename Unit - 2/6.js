setTimeout(()=>{
    alert("What's your name?")
    let name=prompt("Enter your name")
    alert(`Hello, ${name}`)
},1000)



//const timerId=setInterval(()=>{
//    console.log("After 3 sec!")
//},1000)

//console.log(timerId)

//setTimeout(()=>{
//    clearInterval(timerId)
//})


let num =1;

const timerId = setInterval(()=>{
    if (num===10)clearInterval(timerId)
    console.log(num)
    num+=1

},1000)

const id = setTimeout(()=>{
    alert("What's your name?")
},1000)

clearTimeout(id)


const task =document.querySelector('#task')
const btn =document.querySelector('.btn')
const list =document.querySelector('.list')

btn.addEventListener('click',()=>{
    if (task.value ==="") return
    //creating elements
    const li =document.createElement('li')
    const dlt =document.createElement('button')
    //providing text
    dlt.innerText="Delete"
    li.innerText=task.value;

    dlt.addEventListener('click',()=>{list.removeChild(li)})
    //appending the elements
    list.appendChild(li)
    li.appendChild(dlt)
    //clearing text
    task.value=""
})