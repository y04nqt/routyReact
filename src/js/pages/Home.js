import React from "react";

export default class Home extends React.Component {
  render() {
    const { location } = this.props;
    console.log("Home");
    return (
      <h1>Home</h1>
    );
  }
}
