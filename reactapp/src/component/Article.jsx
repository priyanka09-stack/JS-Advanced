import React, { useState ,useEffect } from 'react'
import ArtStyle from "../css/Article.module.css"
import axios from "axios"
//import "../css/Article.css"


function Article (){
    const [count ,setCount]=useState(0)
    const [countt ,setCountt]=useState(0)
    const [name, setName] = useState("Priyanka")
    const [loading,setloading]=useState(false)    
    //let count =0;

    useEffect(()=>{
      console.log("Use Effect Called")
      return()=>{
        console.log("Use Effect Cleanup")
      }
    },[name])

    useState(()=>{



      /*const fetchData = async()=>{
        const response =await fetch("https://dummyjson.com/products",{
          method:"GET"
        })
        const data = await response.json()  
        console.log(data)

        }catch(e){
          console.log(e)
        }

      }/*
      /*const fetchData =()=>{
      console.log("Data Fetched")
    }
     fetchData()*/

     const fetchData=async()=>{
        try{
          const response=await axios.get("https://dummyjson.com/products")
          console.log(response.data)
        }catch(error){
          console.log(error)
        }
      }

      fetchData()
    },[])

    const handleIncrement = () => {
        //count+1;
        setCount(count+1)
        console.log(count)
    }

    const handleDecrement = () => {
        //count+1;
        setCountt(countt-1)
        console.log(countt)
    }
  return (
    <div>
        <h2>Article</h2>
        {loading?<h2>Loading ....</h2>:""}
        <p>During the pre-match press conference ahead of their Indian Premier League (IPL) 2026 match against the Rajasthan Royals (RR), Paras reflected on Bumrah and his evolution from a teenager to becoming a global icon.
           Advertisement
          "One value that every individual and bowler should pick up from Boom (Bumrah) is clearly his work ethic. The way he goes about it in the nets, tick marking everything that he has worked on and will be using during the game. But, in the last few years with the Indian team...he has grown into a phenomenal bowler and even more so as an individual, which has been amazing," the MI bowling coach said.

        Advertisement

        Further, sharing his insights on MI's bowling approach during their first two games and as a coach, how he helps strategise different scenarios.

        Paras said, "As a bowling group...we always discuss how to get wickets in the middle, execute our plans, maintain the pressure on oppositions and how to exploit individual strengths and weaknesses."</p>
        <h2>{name}</h2>
         <h2>{count}</h2>
         <button className={ArtStyle.b} onClick={()=>setName("Johnn")}>Change Name</button>
        <button onClick={handleIncrement}>Increment</button>
        <h2>{countt}</h2>
        <button className={ArtStyle.g} onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Article