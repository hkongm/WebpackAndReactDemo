import React from 'react'
import InputArea from './InputArea'
import PreviewArea from './PreviewArea'
import _template from './_template'

// Markdown 解释器
// var converter = new Showdown.converter();

class Editor extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      content : _template.simple
    }
  }

  /**
   * [组件实时更新方法]
   * @param {String} [input新输入的内容纯文本]
   */
  updatePreview(newContent) {
    console.info('Editor组件:updatePreview')
    this.setState({
      content : newContent
    })
  }

  componentDidMount() {
    console.info('Editor组件:didMount')
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