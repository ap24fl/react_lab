import React from "react";
import Iframe from "react-iframe";

class IfExample extends React.Component {
  render() {
    return (
      <div>
        {/* <iframe 
          title="one"
          name="onename"
          src={
          height={this.props.height}
          width={this.props.width}
        /> */}
        <Iframe
          // url="https://www.youtube.com/embed/xDMP3i36naA"
          url={this.props.src}
          height={this.props.height}
          width={this.props.width}
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />
      </div>
    );
  }
}

export default IfExample;
