import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  navigate(){
    this.context.router.pushState(null, "/featured");
  }
  render() {
    console.log("layout");
    // const { history } = this.props;
    // console.log(history.isActive("archives"));
    return (
      <div>
        <Nav location={location}/>
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
