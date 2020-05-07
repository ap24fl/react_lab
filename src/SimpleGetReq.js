import React from "react";

class SimpleGet extends React.Component {
  constructor(props) {
    super();
    this.state = { movie_name: "" };
  }
  componentDidMount() {
    // Simple GET request using fetch
    // fetch("https://api.npms.io/v2/search?q=react")
    fetch("https://www.omdbapi.com/?t=inception&apikey=4c5b9e3f")
      .then(response => response.json())
      .then(data => this.setState({ movie_name: data.Title }));
  }
  render() {
    return <p>{this.state.movie_name}</p>;
  }
}

export default SimpleGet;
