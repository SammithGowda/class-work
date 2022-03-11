import { useEffect, useState } from "react"
import axios from "axios"
export const Form=()=>{
    const[db,setDb]=useState([])
    const[edata,setEdata]=useState({
        name:"",
        age:"",
        email:"",
        address:"",
        salary:"",
        ismarried:"", 
        Department:""


    })
    useEffect(()=>{
        getdata()
    },[])

    const getdata=()=>{
        axios.get(`http://localhost:4001/userdata`)
        .then((res)=>{
            setDb(res.data)
            // console.log(res.data)
        })
    }

    const eventhandler=(e)=>{
       let {id,value,checked,type}= e.target;
       console.log(type=checked ? "checked" : "notchecked",)
       value =type === checked ? checked:value
       setEdata((para)=>({...para, [id]:value}))
    }

    const eventhandlerdatastore=(e)=>{
        e.preventDefault();
       axios.post(`http://localhost:4001/userdata`,edata).then(()=>{
           alert("user created done")

       }).then(()=>{
        getdata()
       })
    }

    return<>
        <form onSubmit={eventhandlerdatastore} >
            <label>Enter Name</label>
            <input type="text" onChange={eventhandler}  id="name" placeholder="enter name" /> <br />
            <label>Enter Age</label>
          <input type="text" onChange={eventhandler}  id="age" placeholder="enter age" /> <br />
          <label>Enter Email</label>
          <input type="text" onChange={eventhandler} id="email" placeholder="enter email" /> <br />
          <label>Enter Address</label>
          <input type="text" onChange={eventhandler} id="address" placeholder="enter address" /> <br />
          <label>Enter Salary</label>
          <input type="text" onChange={eventhandler} id="salary" placeholder="enter salary" /> <br />
          <label>
              married </label>
              <input type="checkbox" onChange={eventhandler} id="ismarried" checked={"ismarried"} /> <br />
              

          <select onChange={eventhandler} id="Department" >
             <option >select Department</option> 
              <option value={"Scinece"}>Since</option>
              <option value={"Account"}>Account</option>
              <option value={"Sports"}>Sport</option>
          </select><br />
          <input type="submit" value={"sumbit from"} /> <br />
        </form>
                <div className="tbdiv">
                    <table>
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>age</th>
                                <th>email</th>
                                <th>address</th>
                                <th>married</th>
                                <th>department</th>
                            </tr>
                        </thead>
                        <tbody>
                                {db.map(e=>
                                    <tr>
                                        <td>{e.name}</td>
                                        <td>{e.age}</td>
                                        <td>{e.email}</td>
                                        <td>{e.address}</td>
                                        <td>{e.ismarried}</td>
                                        <td>{e.Department}</td>
                                    </tr>
                                    
                                    )}
                        </tbody>
                    </table>
                    
            </div>
                   
    </>
}