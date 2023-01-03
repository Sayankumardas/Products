import React, { useState , useEffect} from 'react'

export default function Useeffecthook(props) {
    const[count,setCount] = useState(0)
    const[data,setData] = useState(100)

    useEffect(()=>{
       console.log("Use Effect Called");
    },[data])

    return (
      <div>
        <h1>The Count Is {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Update count</button>
        <h1>The Data Is {data}</h1>
        <button onClick={()=>{setData(data+1)}}>Update data</button>
        <h1>The Name Is {props.name}</h1>
      </div>
    )
}
