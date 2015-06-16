import React from 'react'

class PreviewArea extends React.Component {

  render() {
    return (
      <div className="output-box">
        <div
         className="preview-box theme-PC"
         dangerouslySetInnerHTML={{__html:this.props.content}}>
        </div>
      </div>
    )
  }
}

module.exports = PreviewArea