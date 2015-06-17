import React from 'react'

class PreviewArea extends React.Component {

  render() {

    var classes = 'preview-box ' + this.props.deviceStyle

    return (
      <div className="output-box">
        <div
         className={classes}
         dangerouslySetInnerHTML={{__html:this.props.content}}>
        </div>
      </div>
    )
  }
}

module.exports = PreviewArea