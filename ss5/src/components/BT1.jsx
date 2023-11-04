import React, {useState} from 'react'

export default function BT1() {
    const [count,setCount] = useState(0)
  return (
    <>
    <h1>BT1</h1>
    <p> Count:{count}</p> 
    <button onClick={()=>{setCount(count+1)}}>Tang Count</button>
    </>
  )
}
