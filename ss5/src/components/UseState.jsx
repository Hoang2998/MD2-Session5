import React, { useState } from 'react'

 function UseState() {

    const [a,setA] = useState(0);
    const [title,setTitle] = useState("");
    const [jobs,setJobs] = useState([]);
    const [job,setJob] = useState("")
    let changeValue = (e)=>{
        let newjob = e.target.value
        setJob(newjob)
    }
    let addTodo = ()=>{
        setJobs([...jobs,job])
        setJob("")
    }
  return (
    <>
    <p> Count : {a}</p>
    <button onClick={()=>{setA(a+1)}}>tang</button><br></br>
    <input type="text"
    onChange={changeValue}
    value={job}
    />
    <button onClick={addTodo}>add</button>
    <p> text vua nhap : {title}</p>
    <ul>
        {
            jobs.map((item,index)=>{
                return <li key = {index}>{item}</li>
            })
        }
    </ul>
    </>
  )
}
export default UseState