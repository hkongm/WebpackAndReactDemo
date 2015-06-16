import React from 'react'

class InputArea extends React.Component {

  render() {
    return (
      <div className="input-box">
        <textarea
          onChange={this.changeHandler}
          ref="textarea"
          />
      </div>
    )
  }
}

module.exports = InputArea