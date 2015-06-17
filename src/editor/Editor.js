import React from 'react'
import _template from './__TemplateDemo'
import DemoSelector from './_DemoSelector'
import DeviceSelector from './_DeviceSelector'
import InputArea from './_InputArea'
import PreviewArea from './_PreviewArea'

import showdown from 'showdown'

// Markdown 解释器
var converter = new showdown.Converter()

let _device = ['pc','m','app','apphd']

class Editor extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      content : _template[0].text,
      device : _device[0]
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
   * @param {Integer} [选中的模板的索引]
   */
  changeTemplate(index) {
    console.info('Editor组件:changeTemplate')
    this.setState({
      content : _template[index].text
    })
  }

  /**
   * [改动预览主题]
   * @param {Integer} [选中的主题的索引]
   */
  changeDevice(index) {
    console.info('Editor组件:changeTheme')
    this.setState({
      device : _device[index]
    })
  }

  // componentDidMount() {
  //   console.info('Editor组件:didMount')
  // }

  render() {
    console.info('Editor组件:render')
    return (
      <div className="editor">
        <div className="top-bar">
          <DemoSelector
            change={this.changeTemplate.bind(this)}
            data={_template}
          />
          <DeviceSelector
            change={this.changeDevice.bind(this)}
            data={_device}
          />
        </div>
        <div className="edit-box">
          <InputArea 
            change={this.updatePreview.bind(this)}
            content={this.state.content}
          />
          <div className="div-bar" />
          <PreviewArea 
            deviceStyle={this.state.device}
            content={this.state.content}
          />
        </div>
      </div>
    )
  }
}

module.exports = Editor