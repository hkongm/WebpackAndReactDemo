import React from 'react'
import SelectOption from './__SelectOption'

export default class DeviceSelector extends React.Component {
  
  // constructor(props) {
  //   super(props)
  // }

  // componentDidMount() {
  //   console.info('DeviceSelector组件:didMount')
  // }

  /**
   * 输入框内容改变的回调，使用props.change访问父级组件Editor的changeDevice方法
   * @param  {Event}
   * @return {void}
   */
  changeHandler(e) {
    console.info('DeviceSelector组件:changeHandler')
    this.props.change(e.target.selectedIndex)
  }

  render() {
    console.info('DeviceSelector组件:render')
    return (
      <div className="">
        <label>选择设备</label>
        <select onChange={this.changeHandler.bind(this)}>
          {
            this.props.data.map((option, idx) => {
              return <SelectOption key={idx} optionname={option} />
            })
          }
        </select>
      </div>
    )
  }
}