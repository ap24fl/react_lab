import React from "react";
import IfExample from "./iframeExmapmple";

class ToDoApp extends React.Component {
  constructor() {
    super();
    this.state = { username: "" };
  }
  myChangeHandler = event => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <div>
        <form>
          <h1>Hello {this.state.username}</h1>
          <p>Enter your name:</p>
          <input type="text" onChange={this.myChangeHandler} />
        </form>
        <IfExample
          src="https://www.youtube.com/embed/xDMP3i36naA"
          height="500"
          width="500"
        />
      </div>
    );
  }
}

export default ToDoApp;
