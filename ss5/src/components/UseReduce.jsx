import React, { useReducer } from 'react'

export default function UseReduce() {
    const reducer=(state,action)=>{
        // if(action == "ASC"){
        //     return state+1;
        // }
        switch (action.action) {
            case "ASC":
                return state + 1;
            case "DESC":
                return state - 1;
            default:
                return state;
        }
    }
    const [abc,ditpach] = useReducer(reducer,0)
    const handleCount = ()=>{
        ditpach({
            payload:"10",
            action:"ASC"
        })
    }
  return (
    <>
    <h1>
        Use Reduce
    </h1>
        <p>count:{abc}</p>
        <button onClick={handleCount}> + count</button>
        <button onClick={()=>ditpach({
            payload:"20",
            action:"DESC",
        })}> - count</button>
    </>
  )
}
