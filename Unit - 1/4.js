const btn=document.querySelector("button")
btn.classList.add("btn")
//btn.classList.remove("s")


function print(){   console.log("Button clicked")
    }

//btn.addEventListener('click', print)
btn.removeEventListener('click', print)

// -------------------------------------------------------------------------------------------



const btn2=document.querySelector(".g")
btn2.classList.add("a")

const btn3=document.querySelector(".h")
btn3.classList.add("d")

function re(event) {
    console.log(event)
    //console.log(event.key)
    console.log(event.type)
    
    console.log("You have clicked the button")
    
}


//btn2.addEventListener('click', re)
btn2.addEventListener('mouseover', re)
//btn2.addEventListener('keydown', re)


btn3.addEventListener('click', ()=>{
    console.log("Stop Clicking The Click Button")
    //btn2.removeEventListener('click',re)
    //btn2.removeEventListener('keydown',re)
    btn2.removeEventListener('mouseover', re)
})


const form=document.querySelector('form')
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log("Form Submitted")
})


const div1=document.querySelector('.u')
const div2=document.querySelector('.i')
const btn4 = document.querySelector('.j')

//div1.addEventListener('click' , ()=>{console.log("Clicked Div 1")})
//div2.addEventListener('click' , ()=>{console.log("Clicked Div 2")})
//btn4.addEventListener('click' , ()=>{console.log("Clicked button")})

div1.addEventListener('click' , ()=>{console.log("Clicked Div 1")} , true)
div2.addEventListener('click' , ()=>{console.log("Clicked Div 2")}, true)
btn4.addEventListener('click' , ()=>{console.log("Clicked button")}, true)


console.log("Changes Done")



  