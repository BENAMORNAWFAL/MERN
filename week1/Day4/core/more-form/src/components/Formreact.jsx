
import React, { useState } from 'react'



const Formreact = () => {
  

    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmpassword,setConfirmassword]=useState("");
    const [error,setError]=useState("")
    const [error1,setError1]=useState("")
    const [error2,setError2]=useState("")
    const [error3,setError3]=useState("")
    const validmail=(e)=>{
      setEmail(e.target.value)
      if(e.target.value.length > 2){
        setError2("that field must be at least 2 characters")
      }else{setError2("")}
      
    }
    const validpassword=(e)=>{
      setPassword(e.target.value)
        
        if(e.target.value.length > 2){
          setError3("that field must be at least 2 characters")
        }else{setError3("")}
      }
    const validate=(e)=>{
      setFirstname(e.target.value)
      if(e.target.value.length > 2){
        setError("that field must be at least 2 characters")
      }else{setError("")}
    }
    const validatelast=(e)=>{
      setLastname(e.target.value)
      if(e.target.value.length > 2){
        setError1("that field must be at least 2 characters")
      }else{setError1("")}
    }

    const createuser=(e)=>{
      e.preventDefault();
      if(firstname.length>2){
        
        setError("that field must be at least 2 characters")
      }else{setError("")}
    }
    
  return (
    
      <div>
        <form onSubmit={(e)=>{createuser(e)}}>

          <label >First Name : </label>
          <input  onChange={(e)=>{validate(e)}} />  
          <p style={{color:"red"}}>{error}</p> 
          <label >Last Name : </label>
          <input  onChange={(e)=>{validatelast(e)}} />
          <p style={{color:"red"}}>{error1}</p> 
          <label >Email : </label>
          <input  onChange={(e)=>{validmail(e)}} /><br />
          <p style={{color:"red"}}>{error2}</p>
          <label >Password : </label>
          <input  onChange={(e)=>{validpassword(e)}} /><br />
          <p style={{color:"red"}}>{error3}</p>
          <label >Confirm Password : </label>
          <input  onChange={(e)=>{setConfirmassword(e.target.value)}} /><br />
          <p>{JSON.stringify(confirmpassword)}</p>       
          <button >sub</button>   
        </form>
      </div>
    
  )
}

export default Formreact
