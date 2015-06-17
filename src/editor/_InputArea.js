import React from 'react'

class InputArea extends React.Component {
  
  // constructor(props) {
  //   super(props)
  // }

  // componentDidMount() {
  //   console.info('InputArea组件:didMount')
  // }
  
  /**
   * 输入框内容改变的回调，使用props.change访问父级组件Editor的UpdatePreview方法
   * @param  {Event}
   * @return {void}
   */
  changeHandler(e) {
    console.info('InputArea组件:changeHandler')
    this.props.change(e.target.value)
  }

  render() {
    console.info('InputArea组件:render')
    return (
      <div className="input-box">
        <textarea
          onChange = {this.changeHandler.bind(this)}
          ref = "textarea"
          value = {this.props.content}
          />
      </div>
    )
  }
}

module.exports = InputArea