import React from 'react'
import SelectOption from './_SelectOption'

class DemoSelector extends React.Component {
  
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.info('DemoSelector组件:didMount')
  }

  changeHandler(e) {
    console.info('DemoSelector组件:changeHandler')
  }

  render() {
    console.info('DemoSelector组件:render')
    return (
      <div className="">
        <label>选择示例模板</label>
        <select>
          {
            this.props.data.map((option) => {
              return <SelectOption optionname={option.name} />
            })
          }
        </select>
      </div>
    )
  }
}

module.exports = DemoSelector