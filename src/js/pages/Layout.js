import React from "react";
import { Link } from "react-router";

export default class Layout extends React.Component {
  navigate(){
    console.log(this.props);
    this.props.history.pushState(null, "/featured");
  }
  render() {
    console.log("layout");
    const { history } = this.props;
    console.log(history.isActive("archives"));
    return (
      <div>
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Link to="/">Home</Link>
        <Link to="archives" activeClassName="test"><button>Archives</button></Link>
        <Link to="settings"><button>Settings</button></Link>
        <button onClick={this.navigate.bind(this)}>Feature</button>
      </div>
    );
  }
}
