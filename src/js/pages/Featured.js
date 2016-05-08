import React from "react";

export default class Featured extends React.Component {
  render() {
    const { location } = this.props;
    console.log("Featured");
    return (
      <h1>Featured</h1>
    );
  }
}
