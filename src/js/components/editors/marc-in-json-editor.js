import AceEditor from 'react-ace';
import autobind from 'autobind-decorator';
import BaseEditor from './base-editor';

require('brace/mode/json');
require('brace/theme/github');

class MarcInJsonEditor extends BaseEditor {
  constructor(props) {
    super(props);
  }
  render() {
    return (<AceEditor
      mode="json"
      theme={this.props.theme || "github"}
      onChange={this.change}
      name="MARC_JSON_EDITOR"
      editorProps={{$blockScrolling: true}}
    ></AceEditor>);
  }
}

export default autobind(MarcInJsonEditor);
