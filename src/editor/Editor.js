import React from 'react'
import showdown from 'showdown'
import _template from './__TemplateDemo'
import DemoSelector from './_DemoSelector'
import InputArea from './_InputArea'
import PreviewArea from './_PreviewArea'

// Markdown 解释器
var converter = new showdown.Converter();

class Editor extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      content : _template[0].text
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
          <DemoSelector data={_template}/>
        </div>
        <div className="edit-box">
          <InputArea 
            change={this.updatePreview.bind(this)}
            content={this.state.content}
          />
          <div className="div-bar" />
          <PreviewArea 
            content={converter.makeHtml(this.state.content)}
          />
        </div>
      </div>
    )
  }
}

module.exports = Editor