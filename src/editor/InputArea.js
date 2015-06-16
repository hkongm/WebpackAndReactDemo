import React from 'react'

class InputArea extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      content : this.props.content
    }
  }

  // 组件加载完成
  componentDidMount() {
    console.info('InputArea组件:didMount')
  }
  
  // 输入变更时，回调
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
          />
      </div>
    )
  }
}

module.exports = InputArea