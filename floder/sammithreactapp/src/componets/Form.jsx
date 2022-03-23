import { useState } from "react"
import axios from "axios"
export const Form=()=>{
    const[edata,setEdata]=useState({
        // name:"",
        // age:"",
        // email:""
    })

    const eventhandler=(e)=>{
       const {id,value}= e.target;
       setEdata({...edata, [id]:value})
    }

    const eventhandlerdatastore=(e)=>{
        e.preventDefault();
       axios.post(`http://localhost:3005/userdata`,edata).then(()=>{
           alert("user created done")
       })
    }

    return<>
        <form onSubmit={eventhandlerdatastore} >
            <input type="text" onChange={eventhandler}  id="name" placeholder="enter name" />
          <input type="text" onChange={eventhandler}  id="age" placeholder="enter age" />
          <input type="text" onChange={eventhandler} id="email" placeholder="enter email" />
          <input type="submit" value={"sumbit from"} />
        </form>
    </>
}