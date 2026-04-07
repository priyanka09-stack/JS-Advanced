import React, { useState } from 'react'

function Article (){
    const [count ,setCount]=useState(0)
    const [countt ,setCountt]=useState(0)
    //let count =0;

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
        <p>During the pre-match press conference ahead of their Indian Premier League (IPL) 2026 match against the Rajasthan Royals (RR), Paras reflected on Bumrah and his evolution from a teenager to becoming a global icon.
           Advertisement
          "One value that every individual and bowler should pick up from Boom (Bumrah) is clearly his work ethic. The way he goes about it in the nets, tick marking everything that he has worked on and will be using during the game. But, in the last few years with the Indian team...he has grown into a phenomenal bowler and even more so as an individual, which has been amazing," the MI bowling coach said.

        Advertisement

        Further, sharing his insights on MI's bowling approach during their first two games and as a coach, how he helps strategise different scenarios.

        Paras said, "As a bowling group...we always discuss how to get wickets in the middle, execute our plans, maintain the pressure on oppositions and how to exploit individual strengths and weaknesses."</p>
        
         <h2>{count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <h2>{countt}</h2>
        <button onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Article