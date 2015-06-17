import React from 'react'

class SelectOption extends React.Component {
  
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

module.exports = SelectOption