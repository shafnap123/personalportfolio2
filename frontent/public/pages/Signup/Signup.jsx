import { useState } from 'react'
import './Signup.css'
import { Button } from '../button/Button'
import axios from 'axios'
export function Signup(){
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    axios.post("http://localhost:5000/usersignup",{
        email:email,
        password:password
    })
    .then((res)=>{
        console.log(res)
        alert(res.data.message)
    })
.catch((err)=>{
    console.log(err)
})
    return(
      
        <div className="Signupmain">
            <h1>Signup</h1><br/>
           <input  className="signupmaininput" type="text" placeholder="email enter" name="email" onChange={(e)=>{setemail(e.target.value)}} ></input><br/>
            <input className="signupmaininput"  type="text" placeholder="password enter"   name="password"onChange={(e)=>{setpassword(e.target.value)}} ></input>
            <Button text="Signup"/>
        </div>
    )
}