import React, { Component } from 'react'

export class App extends Component {

  constructor(){
    super();

    this.state = {
      value: ""
    };
  }

  enterItem = (event)=>{
    this.setState({
      value: event.target.value
    })
  }

  addItem(){
    this.enterItem
  }

  render() {
    return (
      <div>
        <div className="top">
          <input type="text" className='input' placeholder='Type here' onChange={this.enterItem}/>
          <button className='add' onClick={this.addItem}>Add Item</button>
        </div>
        <input type="text">{this.value}</input>
        <button>Delete Item</button>
        </div>
    )
  }
}

export default App