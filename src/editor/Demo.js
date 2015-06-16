// var Editor = React.createClass({
//   render: function() {
//     return (
//       <div className="editor">
//         <div className="top-bar">
//           <SelectTemplate selectTemplate={this.selectTemplate} />
//           <SelectPlatform selectPlatform={this.selectPlatform} />
//         </div>
//         <div className="edit-box">
//           <InputArea ref="input" change={this.updatePreview} />
//           <div className="div-bar" />
//           <PreviewArea ref="output" />
//         </div>
//       </div>
//     )
//   }
// })

import React from 'react'
import InputArea from './InputArea'
import PreviewArea from './PreviewArea'

class Editor extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {count: props.initialCount}
  // }

  // tick() {
  //   this.setState({count: this.state.count + 1})
  // }

  render() {
    return (
      <div className="editor">
        <div className="top-bar">
          topbar
        </div>
        <div className="edit-box">
          <InputArea />
          <div className="div-bar" />
          <PreviewArea />
        </div>
      </div>
    )
  }
}

module.exports = Editor