import React from 'react'
import { useParams} from 'react-router-dom'
const Number = () => {
    const {id,colortext,colorback}=useParams();
  return (
    <div>
        {isNaN(id) ? <h1 style={{color:colortext,backgroundColor:colorback}}>The word is: {id} </h1> : <h1 style={{color:colortext,backgroundColor:colorback}}>The number is: {id}</h1>}
    </div>
  )
}

export default Number