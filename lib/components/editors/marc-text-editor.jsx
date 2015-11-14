import AceEditor from 'react-ace';
import autobind from 'autobind-decorator';
import BaseEditor from './base-editor';

require('brace/mode/text');
require('brace/theme/github');

class MarcTextEditor extends BaseEditor {
  constructor(props) {
    super(props);
  }
  render() {
    return (<AceEditor
      mode="text"
      theme="github"
      onChange={this.change}
      name="MRK_TEXT_EDITOR"
      editorProps={{$blockScrolling: true}}
    ></AceEditor>);
  }
}

export default autobind(MarcTextEditor);
