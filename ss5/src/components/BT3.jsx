import React,{useState , useRef} from 'react'

export default function BT3() {
    const [second,setSecond] = useState(0)
    const [minisecond,setMiniSecond] = useState(0)
    const miniSecond = useRef(0)
    const Second = useRef(0)
    let time = ""
    const start = ()=>{
            time = setInterval(()=>{
            if(miniSecond.current > 100){
                miniSecond.current = 0
                Second.current = Second.current + 1
            }
            miniSecond.current =  miniSecond.current + 1
            setMiniSecond(miniSecond.current)
            setSecond(Second.current)
        },10)
    }
    const stop =()=>{
        clearInterval(time)
    }
  return (
    <>
    <h1>
    BT3
    </h1>
    <h2>Đếm thời gian là :  {second}:{minisecond}</h2>
    <button onClick={start}>Start</button>
    <button onClick={{stop}}>Stop</button>
    </>
  )
}
