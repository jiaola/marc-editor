import React from 'react';
import AceEditor from 'react-ace';
import {Tabs, Tab} from 'react-bootstrap';
import {MarcXmlEditor, MarcInJsonEditor, MarcTextEditor} from './editors'

class MarcEditor extends React.Component {
  onChange(newValue) {
    console.log('change this', newValue);
  }

  render() {
    return (
      <Tabs defaultActiveKey={1}>
        <Tab eventKey={1} title="Text">
          <MarcTextEditor
            onChange={this.onChange}
            ></MarcTextEditor>
        </Tab>
        <Tab eventKey={2} title="XML">
          <MarcXmlEditor
            onChange={this.onChange}
            ></MarcXmlEditor>
        </Tab>
        <Tab eventKey={3} title="JSON">
          <MarcInJsonEditor
            onChange={this.onChange}
            ></MarcInJsonEditor>
        </Tab>
      </Tabs>
    )
  }
}

export default MarcEditor;
