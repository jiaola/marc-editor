import React from 'react';
import AceEditor from './editors/ace-editor';
import MarcEditorActions from '../actions/marc-editor-actions';
import MarcEditorMixin from '../mixins/marc-editor-mixin';
import MarcEditorStore from '../stores/marc-editor-store';
import Tab from './bootstrap/tab';
import marc4js from 'marc4js';
import Bacon from 'baconjs';

require('../../css/marc-editor.css');

const initEditor = (props) => (
  {key: MarcEditorStore.getMode()}
);

var Tabs = (props) => (
    <ul className="nav nav-tabs">
      {props.children}
    </ul>
  );

class MarcEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = initEditor(props);
    this.handleTabSelect = this.handleTabSelect.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount(){
    MarcEditorStore.addChangeListener( this._onChange );
  }

  componentWillUnmount(){
    MarcEditorStore.removeChangeListener( this._onChange );
  }

  _onChange() {
    this.setState(initEditor(this.props));
    let records = MarcEditorStore.getRecords();
    let result = Bacon.fromNodeCallback(marc4js.transform, records, {toFormat: this.state.key});
    result.onError((error) => console.log(error));
    result.onValue((output) => this._ace.setValue(output));
  }

  handleTabSelect(key) {
    if (key === this.state.key) return;
    let value = this._ace.getValue();
    let result = Bacon.fromNodeCallback(marc4js.parse, value, {fromFormat: this.state.key});
    result.onError((error) => console.log(error));
    result.onValue((records) => {
      MarcEditorActions.changeMode(key, records);
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="panel panel-default">
            <AceEditor name="ace_editor" ref={(c) => this._ace = c}/>
          </div>
        </div>
      </div>
    );
  }
}

export default MarcEditor;
