import React from 'react'
import showdown from 'showdown'
// Markdown 解释器
var converter = new showdown.Converter()

export default class PreviewArea extends React.Component {

  render() {
    var classes = 'preview-box ' + this.props.deviceStyle

    return (
      <div className="output-box">
        <div
         className={classes}
         dangerouslySetInnerHTML={{__html:converter.makeHtml(this.props.content)}}>
        </div>
      </div>
    )
  }
}