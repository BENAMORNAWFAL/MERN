import React from 'react'

function Tab1(props) {
  return (
    <div>
        <textarea  placeholder='Tap Your content Here' style={{height: "200px",width:"400px"}} onChange={(e)=>{props.setTab1(e.target.value)}} value={props.datas[0]} >{props.datas[0]}</textarea>
    </div>
  )
}

export default Tab1