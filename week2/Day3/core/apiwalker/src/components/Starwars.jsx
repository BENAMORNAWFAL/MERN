import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Starwars = () => {
  
    const [thisdata,setThisData]=useState(null)
    const {id,data}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${data}/${id}/`)
        .then((starsResponse)=>{console.log(starsResponse);
                                setThisData(starsResponse);})
        .catch((error)=>{navigate("/error",{replace:true})})
    },[data,id])

  return (
    <div>
      {/* <h1>{thisdata.data.name}</h1> */}
      
      {thisdata && data === "people"  ? <>
      <h3>Heigth :  </h3>   {thisdata.data.height} <br />
      <h3>Mass : </h3>   {thisdata.data.mass} <br />
      <h3>Hair Color : </h3>   {thisdata.data.hair_color}<br />
      <h3>Skin Color : </h3>   {thisdata.data.skin_color}</>   
                : 
      <><h3>Climate :     </h3>   {thisdata.data.climate} <br />
      <h3>Terrain :       </h3>   {thisdata.data.terrain} <br />
      <h3>Surface Water : </h3>   {thisdata.data.surface_water}<br />
      <h3>Population :    </h3>   {thisdata.data.population}</>
      }

    </div>
  )
}

export default Starwars