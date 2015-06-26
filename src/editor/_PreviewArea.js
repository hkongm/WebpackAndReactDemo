import React from 'react'
import marked from 'marked'

export default class PreviewArea extends React.Component {

  render() {
    var classes = 'preview-box ' + this.props.deviceStyle

    return (
      <div className="output-box">
        <div
         className={classes}
         dangerouslySetInnerHTML={{__html:marked(this.props.content, {sanitize: true})}}>
        </div>
      </div>
    )
  }
}