import React from 'react'
import Router from 'react-router'

import Home from './Home'
import Editor from './editor/Editor'

var {
  Route,
  RouteHandler,
  DefaultRoute,
} = Router;

var About = React.createClass({
  render: function () {
    return <h2>About</h2>;
  }
});

var App = React.createClass({
  render() {
    return (
      <div>
        <RouteHandler/>
      </div>
    )
  }
});

var routes = (
  <Route location="history">
    <Route path="/" handler={App}>
      <Route path="editor" name="editor" handler={Editor}/>
      <Route path="about" name="about" handler={About}/>
      <DefaultRoute handler={Home}/>
    </Route>
  </Route>
);


Router.run(routes,  (Root) => {
  React.render(<Root/>, document.body);
});