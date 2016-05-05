import React from "react";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    console.log("Archives");
    return (
      <h1>Archives</h1>
    );
  }
}
