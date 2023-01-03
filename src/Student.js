import React, { Component } from 'react'

export default class Student extends Component {
    componentWillUnmount(){
        alert("Component Will Unmount Called");
    }
  render() {
    return (
      <div className='App'>
        <h1>Student Component</h1>
      </div>
    )
  }
}
