import React from 'react';
import MarcEditorStore from '../stores/marc-editor-store';

// TODO: This is currently not used
export default ( InnerComponent, stateCallback ) => class extends React.Component {
  constructor(props){
    super(props);
    this.state = stateCallback( props );
    this._onChange = this._onChange.bind(this);
  }
  componentWillMount(){
    MarcEditorStore.addChangeListener( this._onChange );
  }
  componentWillUnmount(){
    MarcEditorStore.removeChangeListener( this._onChange );
  }
  _onChange() {
    this.setState( stateCallback( this.props ) );
  }
  render(){
    return <InnerComponent {...this.state} {...this.props} />
  }
}
