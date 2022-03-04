import { useState } from "react"
export function Counter(){
    const [count,setCounter]= useState(0);
    
    function changingvlaue(value) {
        setCounter(count+value)
    } 
    return(
        <>
        <div id="main">
        <h1>count {count}</h1>
        <button onClick={()=>{ 
            changingvlaue(1)
        }}> 
            Increment
        </button>
        <button onClick={()=>{ 
            if(count>0){

                changingvlaue(-1)
            }
        }}> 
            decrement
        </button>
        <button onClick={()=>{ 
        changingvlaue(count)
        }}> 
            Dubble
        </button>
        </div>
        </>
    )
}