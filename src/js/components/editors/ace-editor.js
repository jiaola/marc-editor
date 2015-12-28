import React from 'react';
import ace from 'brace';

require('brace/theme/monokai');
require('brace/mode/marctext');

class AceEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChange = this.onChange.bind(this);
    this.getValue = this.getValue.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  onChange(e) {
  }

  componentDidMount() {
    this.editor = ace.edit(this.props.name);
    this.editor.setTheme("ace/theme/monokai");
    this.editor.session.setMode("ace/mode/marctext");
    this.editor.getSession().setUseWrapMode(true);
    this.editor.on('change', this.onChange);
    this.editor.$blockScrolling = Infinity;
  }

  componentWillUnmount() {
    this.editor = null;
  }

  getValue() {
    return this.editor.getSession().getValue();
  }

  setValue(value) {
    this.editor.getSession().setValue(value);
  }

  setMode(mode) {
    mode = "marc/mode/" + mode;
    this.editor.getSession().setMode(mode);
  }

  render() {
    var divStyle = {
      height: "700px"
    };
    return (
      <div id={this.props.name} style={divStyle}>
      </div>
    );
  }
}

export default AceEditor;
