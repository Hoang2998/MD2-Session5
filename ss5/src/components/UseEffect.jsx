import React, {useEffect, useState} from 'react'

function UseEffect() {
    const [count,setCount] = useState(0)
    const [title,swtTitle] = useState("")

    // useEffect(()=>{
    //     console.log("1111111111");
    // },[])
    useEffect(()=>{
        console.log("1111111111");
    },[title])
    


  return (
    <>  
        <h1>USE EFFECT</h1>
        <p>count:{count}</p>
        <button onClick={()=>{setCount(count+1)}}>tang</button>
        <button onClick={()=>{setTitle("get data")}}>click</button>
    </>
  )
}
export default UseEffect;