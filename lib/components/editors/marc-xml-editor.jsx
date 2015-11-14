import AceEditor from 'react-ace';
import autobind from 'autobind-decorator';
import BaseEditor from './base-editor';

require('brace/mode/xml');
require('brace/theme/github');

class MarcXmlEditor extends BaseEditor {
  constructor(props) {
    super(props);
  }
  render() {
    return (<AceEditor
      mode="xml"
      theme="github"
      onChange={this.change}
      name="MARC_XML_EDITOR"
      editorProps={{$blockScrolling: true}}
    ></AceEditor>);
  }
}

export default autobind(MarcXmlEditor);
