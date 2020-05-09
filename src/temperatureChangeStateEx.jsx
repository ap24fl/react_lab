import React from "react";

// var Water = React.createClass({
class Water extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTemp: 10
    };
  }

  setTemperature = e => {
    this.setState({ currentTemp: e.target.value });
  };

  render() {
    // empty variable that will hold either "Liquid", "Solid", or "Gas"
    var stateOfMatter;

    // If temp is on/below freezing, it's a solid
    if (this.state.currentTemp <= 32) {
      stateOfMatter = "Solid";

      // if temp is on/above boiling, it's a gas
    } else if (this.state.currentTemp >= 212) {
      stateOfMatter = "Gas";

      // otherwise it's just a liquid
    } else {
      stateOfMatter = "Liquid";
    }

    return (
      <div>
        <input
          type="text"
          onChange={this.setTemperature}
          value={this.state.currentTemp}
        />
        <p>
          At {this.state.currentTemp}°F, water is considered to be a "
          {stateOfMatter}" state of matter.
        </p>
      </div>
    );
  }
}

export default Water;
