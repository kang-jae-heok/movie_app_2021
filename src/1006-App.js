import { render } from "@testing-library/react";
import React ,{ Component } from "react";



class App extends Component{
  state={
    count:0
  }
  add =() =>{
    console.log('add');
    this.setState(current =>({count:1}))
  }
  minus =() =>{
    console.log('minus');
    this.setState(current =>({count:1}))
  }
  render(){
    console.log('render');
    return(
      <div>
        <h1>The number is {this.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}





export default App;