import React from "react";

// fatch exerices from api
// todo after finishinf the iteratioin send log
var info = [
  {
    title: "Dashboard",
    content:
      "The dashboard is your main homepage. It will display a feed of looks..."
  },
  {
    title: "Discover",
    content:
      "Discover allows you to find new looks, what is trending and search for looks, brands and users"
  },
  {
    title: "Upload you look, style guide and more "
  }
];

class TitleAddion extends React.Component {
  handleSubmit = event => {
    // const addTitle = (title, content) =>
    info.push({ title: this.title, content: this.content });
  };
  render() {
    return (
      <div>
        <p>add another title</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            // onChange={this.handleChange}
            placeholder="title"
          />
          <input
            type="text"
            name="content"
            // onChange={this.handleChange}
            placeholder="content"
          />
          <input type="submit" value="Add title" />{" "}
        </form>
        <p>info</p>
      </div>
    );
  }
}

class Guide extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0
    };
  }

  goToNext = () => {
    this.setState({ index: (this.state.index + 1) % info.length });
  };

  render() {
    const item = info[this.state.index];
    return (
      <div>
        <h2>{item.title}</h2>
        <p>{item.content}</p>
        <button onClick={this.goToNext}>next</button>
        <TitleAddion />
      </div>
    );
  }
}

export default Guide;

// ReactDOM.render(<Guide />, document.getElementById("app"));
