import React from 'react'
import SelectOption from './__SelectOption'

class DeviceSelector extends React.Component {
  
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.info('DeviceSelector组件:didMount')
  }

  render() {
    console.info('DeviceSelector组件:render')
    return (
      <div className="">
        <label>选择设备</label>
        <select>
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

module.exports = DeviceSelector