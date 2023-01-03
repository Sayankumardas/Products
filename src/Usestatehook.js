import React,{useState} from 'react'

export default function Usestatehook() {
    const[city,setCity] = useState("New York")   
    //useState is a hook for updating data in a function based components like setState in class based components
  return (
    <div className='App'>
        <h1>The Name Of The City Is {city}</h1>
        <button onClick={()=>setCity("Delhi")}>Click Me</button>    
    </div>
  )
}
