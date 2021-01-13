import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      text: "",
      todos: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate() {
    console.log("Inside cmd", this.state.isClicked);
    console.log(this.state.text);
    console.log(this.state.todos);
  }

  handleClick = () => {
    //this.setState({isClicked: !this.state.isClicked})
    this.setState({
      todos: [...this.state.todos, this.state.text],
      text: " ",
    });

    //clear out the text event.target.value
  };

  handleChange(evt) {
    console.log(evt.target.value);
    this.setState({ text: evt.target.value });
  }

  //hint??

  //findIndex & Splice method^^^^

  render() {
    return (
      <div className="App">
        <h1>GET IT DONE</h1>
        <input
          value={this.state.text}
          type="text"
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Click me ;)</button>
        <ul>
          {this.state.todos.map((item, index) => {
            return (
              <li key={index}>
                {item} <button onClick={this.handleRemove}>completed</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
