import React from 'react'

function Tab2(props) {
  return (
    <div>
        <textarea placeholder='Tap Your content Here' style={{height: "200px",width:"400px"}} onChange={(e)=>{props.setTab2(e.target.value)}} value={props.datas[1]} >{props.datas[1]}</textarea>
    </div>
  )
}

export default Tab2