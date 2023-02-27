import React, { Component } from "react";

class App extends Component {
  render() {
    const aGreeting = this.props.name;
    return <Greeting aProp={aGreeting} />;
  }
}

class Greeting extends Component {
  render() {
    return (
      <h1 align="center" className="headings-h1">
        {this.props.aProp}
      </h1>
    );
  }
}

export default App;
