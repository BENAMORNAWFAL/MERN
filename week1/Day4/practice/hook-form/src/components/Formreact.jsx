
import React, { useState } from 'react'

const Formreact = () => {
    const[firstname,setFirstname]=useState("");
    const[lastname,setLastname]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirmpassword,setConfirmassword]=useState("");
  return (
    
      <div>
        <form >
          <label >First Name : </label>
          <input  onChange={(e)=>{setFirstname(e.target.value)}} /> <br />
          <label >Last Name : </label>
          <input  onChange={(e)=>{setLastname(e.target.value)}} /><br />
          <label >Email : </label>
          <input  onChange={(e)=>{setEmail(e.target.value)}} /><br />
          <label >Password : </label>
          <input  onChange={(e)=>{setPassword(e.target.value)}} /><br />
          <label >Confirm Password : </label>
          <input  onChange={(e)=>{setConfirmassword(e.target.value)}} /><br />
          <p>First Name: {JSON.stringify(firstname)}</p>
          <p>Last Name: {JSON.stringify(lastname)}</p>
          <p>Email: {JSON.stringify(email)}</p>
          <p>Password: {JSON.stringify(password)}</p>
          <p>Password: {JSON.stringify(confirmpassword)}</p>
        </form>
      </div>
    
  )
}

export default Formreact
