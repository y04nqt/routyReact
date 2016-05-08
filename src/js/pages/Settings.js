import React from "react";

export default class Settings extends React.Component {
  render() {
    const { location } = this.props;
    console.log("Settings");
    return (
      <h1>Settings</h1>
    );
  }
}
