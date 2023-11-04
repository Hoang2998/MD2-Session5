import React, {useState,useRef} from 'react'

 function UseRef() {
const[number,setNumber] = useState(1)
 const obj={
    count:0,
 }

const ref = useRef(0);
const focus = useRef()


const changeCount=()=>{
    obj.count=obj.count+1;
    setNumber(number+1)
    ref.current=ref.current+1
}
console.log("11111",obj.count);
console.log("11111",ref.current);
const addTodo = ()=>{
    focus.current.focus() 
}


  return (
    <>
    <button onClick={addTodo}>ADD</button>
    <input type="text" name="" id="" ref={focus}/>
    <button onClick={changeCount}>use Ref</button>
    </>
  )
}
export default UseRef