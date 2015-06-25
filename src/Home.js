import React from 'react'

import Router from 'react-router'

var {
  Link
} = Router;

export default class extends React.Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <nav>
          <Link to="editor">编辑器</Link>
          <Link to="about">关于我</Link>
        </nav>
      </div>
    );
  }
}