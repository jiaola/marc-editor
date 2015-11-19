import React from 'react';
import AceEditor from './editors/ace-editor';
import {Tabs, Tab} from 'react-bootstrap';
import MarcEditorActions from '../actions/marc-editor-actions';
import MarcEditorMixin from '../mixins/marc-editor-mixin';
import MarcEditorStore from '../stores/marc-editor-store';
import marc4js from 'marc4js';
import Bacon from 'baconjs';

const initEditor = (props) => (
  {key: MarcEditorStore.getMode()}
)

class MarcEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = initEditor(props);
    this.handleTabSelect = this.handleTabSelect.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount(){
    console.log('will mount');
    MarcEditorStore.addChangeListener( this._onChange );
  }

  componentWillUnmount(){
    MarcEditorStore.removeChangeListener( this._onChange );
  }

  _onChange() {
    this.setState(initEditor(this.props));
    console.log(this.state.key);
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
      if (records.length > 0) {
        MarcEditorActions.changeMode(key, records.splice(0, 1));
      }
    });
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
        MARC Editor
        </div>
        <div className="row">
          <div className="toolbar col-lg-12 col-md-12 col-sm-12">
            <Tabs activeKey={this.state.key} onSelect={this.handleTabSelect}>
              <Tab eventKey="text" title="Text"></Tab>
              <Tab eventKey="marc" title="MARC"></Tab>
            </Tabs>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="panel panel-default">
              <AceEditor name="ace_editor" ref={(c) => this._ace = c}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MarcEditor;
