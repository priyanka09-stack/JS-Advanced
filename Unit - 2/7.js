/*console.log("Seashoreeeeeeeeeee")
const g = setTimeout(()=>{
    alert("Helloooo from Rainforest !!!!!")

},1000)

let age =prompt("Enter your age")
const h = setInterval(()=>{
    if (age>=18)clearInterval(h)
        console.log("You are eligible to vote !!")
    

},2000)*/

/*console.log("Starting homework ........................")
setTimeout(()=>{
    console.log("Homework Done");
    console.log("Starting Dinner");

    setTimeout(()=>{
        console.log("Dinner done")
        console.log("Getting ready to go out !!")

        setTimeout(()=>{
            console.log("Going to playground")

        },1000);

    },1500);

},2000);*/


function finishhw(callback){
    console.log("Starting HW")
    setTimeout(()=>{
        console.log("HW Done!")
        callback()
    },2000)
}

function Dinner(callback){
    console.log("Starting Dinner")
    setTimeout(()=>{
        console.log("Dinner done")
        callback()
    },1500)
}


function playground(){
    console.log("Going to play ground !!")

}

finishhw(function(){
    Dinner(function(){playground();})
})
