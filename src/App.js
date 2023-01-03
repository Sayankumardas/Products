import './App.css';
import React, { Component } from 'react'
import Student from './Student';
import Usestatehook from './Usestatehook';
import Events from './Events';
import Useeffecthook from './Useeffecthook';
import UseEffectAPI from './components/useEffect/useEffectAPI';
import Navbar from './components/Navbar';
export default class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        name : "Sayan",
        count : 0,
        active : "not activated"
      }
      this.state = {
        show : true
      }
      console.log(this);
  }

/*   componentDidMount(){
    console.log("Componet Did Mounted");
    // this.setState({name : "Avisekh"});  
    // it will always called once only after render function called.
  }

  componentDidUpdate(preProps,preState){
    console.log("component did updated",preState);
    if(this.state.active === "not activated"){
      {
      this.setState({active : "activated"})
      }
    }
  } */

  render() {
    return (
      <>
      <div>
      {/* <h1>My name is {this.state.name} and count value is {this.state.count} and my state is {this.state.active}</h1>
      <button onClick={() => this.setState({count : this.state.count+1}) }>Click</button>
      {
        this.state.show ? <Student/> : <h1>Child component removed</h1>
      }
      <button onClick={()=> this.setState({show:!this.state.show})}>Toggle Child Component</button>
      <Usestatehook/>
      <Events/>
      <Useeffecthook name="Sayan"/> */}
      <Navbar/>
      <UseEffectAPI/>
      </div>
      </>
    )
  }
}

