import React from 'react'

export default function Events () {
    let football = (a, b) => {
        alert(a);
        console.log(b.type)
    }
  return (
    <div>
        <h1>Hello There,</h1>
        <button onClick={(event)=>{football("Ronaldo Scored",event)}}>Mouse Over</button>
    </div>
  )
}
