import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {

  render() {
    const { location } = this.props;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    return (
      <nav role="navigation">
        <div class="container">
            <Link to="/"><button>HOME</button></Link>
            <ul class="nav navbar-nav">
              <li class={featuredClass}>
                <IndexLink to="featured">Featured</IndexLink>
              </li>
              <li class={archivesClass}>
                <Link to="archives">Archives</Link>
              </li>
              <li class={settingsClass}>
                <Link to="settings">Settings</Link>
              </li>
            </ul>
          </div>
      </nav>
    );
  }
}
