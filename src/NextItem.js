import React from "react";

const info = [
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
      </div>
    );
  }
}

export default Guide;

// ReactDOM.render(<Guide />, document.getElementById("app"));
