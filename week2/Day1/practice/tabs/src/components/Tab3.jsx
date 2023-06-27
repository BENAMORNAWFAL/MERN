import React from 'react'

function Tab3(props) {
  return (
    <div>
        <textarea placeholder='Tap Your content Here' style={{height: "200px",width:"400px"}} onChange={(e)=>{props.setTab3(e.target.value)}} value={props.datas[2]} >{props.datas[2]}</textarea>
    </div>
  )
}

export default Tab3