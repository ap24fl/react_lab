import React from "react";

// var Liquid = React.createClass({
class Liquid extends React.Component {
  getInitialState() {
    return {
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
    if (this.state.currentTemp <= this.props.config.freezing) {
      stateOfMatter = "Solid";

      // if temp is on/above boiling, it's a gas
    } else if (this.state.currentTemp >= this.props.config.boiling) {
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
          At {this.state.currentTemp}°F, {this.props.config.name} is considered
          to be a "{stateOfMatter}" state of matter.
        </p>
      </div>
    );
  }
}

// Create object to hold water's name, freezing & boiling points

class LiquidsList extends React.Component {
  render() {
    var liquids = this.props.liquids.map(function(liquidObject, index) {
      return <Liquid config={liquidObject} key={index} />;
    });
    return <div>{liquids}</div>;
  }
}

// Create object to hold water's name, freezing & boiling points
var water = {
  name: "Water",
  freezing: 32,
  boiling: 212
};

// Create object to hold ethanol's name, freezing & boiling points
var ethanol = {
  name: "Ethanol",
  freezing: -173.2,
  boiling: 173.1
};

// examplet of passing a parameters to a componenet thst get list value
// Render our LiquidsList component!
// ReactDOM.render(<LiquidsList liquids={ [ethanol, water] } />, document.getElementById('container'));

export default LiquidsList;
