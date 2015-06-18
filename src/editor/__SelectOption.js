import React from 'react'

export default class SelectOption extends React.Component {
  
  // constructor(props) {
  //   super(props)
  // }

  render() {
    console.info('SelectOption组件:render')
    return (
      <option>
        {this.props.optionname}
      </option>
    )
  }
}