import React from 'react'
import Router from 'react-router'
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

import Editor from './editor/Editor'


// import BrowserHistory from 'react-router/lib/BrowserHistory';
// import BrowserHistory from 'react-router/lib/History';

// class App extends React.Component {
  
//   render() {
//     console.info('App:render')
//     return (
//       <div>
//         <h1>App</h1>
//       </div>
//     )
//   }
// }

// var About = React.createClass({/*...*/});
// // etc. 

// var Users = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>Users</h1>
//         <div className="master">
//           <ul>
//             {/* use Link to route around the app */}
//             {this.state.users.map(user => (
//               <li><Link to={`/users/${users.id}`}>{user.name}</Link></li>
//             ))}
//           </ul>
//         </div>
//         <div className="detail">
//           {this.props.children}
//         </div>
//       </div>
//     );
//   }
// });

// var User = React.createClass({
//   componentDidMount() {
//     this.setState({
//       // route components are rendered with useful information, like URL params
//       user: findUserById(this.props.params.userId)
//     });
//   },

//   render() {
//     return (
//       <div>
//         <h2>{this.state.user.name}</h2>
//         {/* etc. */}
//       </div>
//     );
//   }
// });

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
// React.render((
//   <Router history={new BrowserHistory}>
//     <Route path="/" component={App}>
//       <Route path="about" component={About}/>
//       <Route path="users" component={Users} indexComponent={RecentUsers}>
//         <Route path="/user/:userId" component={User}/>
//       </Route>
//       <Route path="*" component={NoMatch}/>
//     </Route>
//   </Router>
// ), document.body);
// React.render((
//   <Router handler={App}>
//     <Route path="about" handler={About}/>
//     <Route path="inbox" handler={Inbox}/>
//   </Router>
// ), document.body);

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
var Message = React.createClass({
  render: function () {
    return <h3>Message11</h3>;
  }
});

var App = React.createClass({
  render () {
    return (
      <div>
        <h1>App</h1>
        <RouteHandler/>
      </div>
    )
  }
});

var routes = (
  <Route handler={App}>
    <Route path="editor" handler={Editor}/>
    <Route path="about" handler={About}/>
    <Route path="inbox" handler={Inbox}>
      <Route path="messages/:id" handler={Message}/>
    </Route>
  </Route>
);


Router.run(routes,  (Root) => {
  React.render(<Root/>, document.body);
});