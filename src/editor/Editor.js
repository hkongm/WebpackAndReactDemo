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

  /**
   * [改动模板，相应更新Editor中State的content内容]
   * @param {Integer} [选中的模板索引]
   */
  changeTemplate(index) {
    console.info('Editor组件:changeTemplate')
    this.setState({
      content : _template[index].text
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
          <DemoSelector
            change={this.changeTemplate.bind(this)}
            data={_template}
          />
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