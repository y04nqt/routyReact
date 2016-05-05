import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="archives(/:article)" component={Archives}></Route>
      <Route path="featured" component={Featured}></Route>
      <Route path="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
