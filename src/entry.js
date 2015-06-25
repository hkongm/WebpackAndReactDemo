import React from 'react'
import Router from 'react-router'

import Editor from './editor/Editor'

var {
  Route: Route, 
  RouteHandler: RouteHandler, 
  DefaultRoute: DefaultRoute
} = Router;

var About = React.createClass({
  render: function () {
    return <h2>About</h2>;
  }
});

var Inbox = React.createClass({
  render: function () {
    return <h2>Inbox</h2>;
  }
});

var Home = React.createClass({
  render: function () {
    return <h2>Home</h2>;
  }
});

var App = React.createClass({
  render () {
    return (
      <div>
        <RouteHandler/>
      </div>
    )
  }
});

var routes = (
  <Route handler={App}>

    <DefaultRoute handler={Home}/>

    <Route path="editor" handler={Editor}/>
    <Route path="about" handler={About}/>
  </Route>
);


Router.run(routes,  (Root) => {
  React.render(<Root/>, document.body);
});