import React from "react";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    console.log("Home");
    return (
      <h1>Home</h1>
    );
  }
}
