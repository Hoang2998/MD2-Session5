import React, {useState} from 'react'

export default function BT2() {
    const [text,setText] = useState("")
    const [textCount,setTextCount] = useState("")
    const textValue = (e)=>{
        let text = e.target.value.trim().split(" ")
        let result = text.join("")
        console.log(result)
        setText(result)
    }
    const countText = ()=>{
        let result = text.length
        console.log(result);
        setTextCount(result)
    }
  return (
    <>
    <h1>BT2</h1>
    <input type="text" onChange={textValue}/>
    <button onClick={countText} >Count</button>
    <p>Số kí tự là:{textCount}</p>
    </>
  )
}
