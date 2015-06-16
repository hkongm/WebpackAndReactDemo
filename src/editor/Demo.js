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
import _template from './_template'

class Editor extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      content : "asdfasd"
    }
  }

  updatePreview(newContent) {
    console.info('Editor组件:updatePreview')
    this.setState({
      content : newContent
    })
  }

  // 组件加载完成，默认加载语法介绍模板
  componentDidMount() {
    console.info('Editor组件:didMount')
    this.setState({
      content : _template.simple
    })
  }

  render() {
    console.info('Editor组件:render')
    return (
      <div className="editor">
        <div className="top-bar">
          topbar
        </div>
        <div className="edit-box">
          <InputArea 
            change={this.updatePreview.bind(this)}
            content={this.state.content}
          />
          <div className="div-bar" />
          <PreviewArea 
            content={this.state.content}
          />
        </div>
      </div>
    )
  }
}

module.exports = Editor