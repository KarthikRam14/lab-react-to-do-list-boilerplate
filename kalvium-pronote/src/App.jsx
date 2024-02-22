import React from "react";
import { Component } from "react";
import "./App.css";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
    };
  }

  enterItem = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  addItem = () => {
    if (this.state.value !== "") {
      this.setState({
        items: [...this.state.items, this.state.value],
        value: "",
      });
    }
  };

  deleteItem = (index) => {
    const items = [...this.state.items];
    items.splice(index, 1);
    this.setState({ items });
  };

  render() {
    return (
      <div>
        <div className="top">
          <input
            type="text"
            className="input"
            placeholder="Type here"
            onChange={this.enterItem}
            value={this.state.value}
          />
          <button className="add" onClick={this.addItem}>
            Add Item
          </button>
        </div>
        <ul>
          {this.state.items.map((item, index) => (
            <div className="items" key={index}>
              {item}
              <button className="delete" onClick={() => this.deleteItem(index)}>
                Delete
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
