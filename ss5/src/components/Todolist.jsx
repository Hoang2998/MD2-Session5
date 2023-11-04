import React,{useState,useRef} from 'react'
import './Todo.css'
export default function Todolist() {
    const [jobs,setJobs] = useState([
        {
          name:"run",
          id:1,
          status:false
        },
        {
            name:"do",
            id:2,
            status:false
        },
        {
            name:"bike",
            id:3,
            status:false
        },
    ])
    const [job,setJob] = useState([{
        name:"",
        id:"",
        status:false
    }])

    const changeStatus = (id)=>{
        console.log(id);
        let index = jobs.findIndex((item)=>{
            return item.id == id

        })
        let arr =[...jobs]
        arr[index].status = !arr[index].status

        setJobs(arr)
    }
    const uuid = ()=>{
        return Math.floor(Math.random()*99999)
    }
    const changeValue=(e)=>{
            // ref.current =""
        if(flag.current == "EDIT"){
            ref.current = e.target.value
            newUpdate.current = e.target.value
            setJobs([...jobs])
            return
        }
        let newArr = [...job]
        ref.current = e.target.value
        newArr.name = e.target.value
        newArr.id = uuid()
        setJob(newArr)
        // console.log(newArr);
    }
    const addJob = ()=>{
        if(ref.current != ""){
            if(flag.current == "EDIT"){
                let arr = [...jobs]
                arr[indexEdit.current].name = newUpdate.current
                statusA.current = "ADD"
                setJobs(arr)
                flag.current = "ADD"
                ref.current =""
                return
            }
            setJobs([...jobs,job])
            ref.current =""
        }
        
    }
    const deleteJob = (id)=>{
        let index = jobs.findIndex((item)=>{
            return item.id == id

        })
        let newArr = [...jobs]
        newArr.splice(index,1)
        setJobs(newArr)
    }
    const ref = useRef("")
    const flag = useRef("ADD")
    const indexEdit = useRef("")
    const newUpdate = useRef("")
    const statusA = useRef("ADD")

    const editJob=(id)=>{
        let index = jobs.findIndex((item)=>{
            return item.id == id

        })
        let newArr = [...jobs]
        indexEdit.current = index
        flag.current = "EDIT"
        ref.current = newArr[index].name
        statusA.current = "EDIT"
        setJobs(newArr)
        // ref.current =""
    }


  return (
    <>
    <div className='form'>
    <h1>Todolist</h1>
    <hr />
    <ul>
        {
            jobs.map((item,index)=>{
                let check = item.status
                let checker = check?"line-through":""
                // console.log(check);
                return <li key={index}  >
                <p style={{textDecoration:checker}} >{item.name}</p>  
                <input 
                type="checkbox"
                checked={item.status}
                onChange={()=>changeStatus(item.id)}
                />
                <button className='btn' onClick={()=>{ deleteJob(item.id)}}><span class="material-symbols-outlined">
                delete
                </span></button>
                <button className='btn' onClick={()=>{ editJob(item.id)}}><span class="material-symbols-outlined">
                edit_note
                </span></button>
                </li>
            })
        }
    </ul>
    <input type="text" onChange={changeValue} value={ref.current}/>
    <button onClick={addJob}><>{statusA.current}</></button>
    </div>
    
    </>
  )
}
