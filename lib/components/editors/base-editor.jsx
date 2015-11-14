import React from 'react';
import autobind from 'autobind-decorator'

class BaseEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  // Override this method if the editor subclass
  // needs to be notified of changes
  update() {
  }

  // returns true if the editor allows editing
  // override to disable editing
  isEditable() {
    return true;
  }

  // By default this method should be called when the content is changed
  // in the editor. It calls the onChange prop, and passes newValue
  // as a parameter
  change(newValue) {
    this.props.onChange(newValue);
  }
}

export default autobind(BaseEditor)
