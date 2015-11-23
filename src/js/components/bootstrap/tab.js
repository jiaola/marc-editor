import React from 'react';

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onSelect(this.props.uid);
  }

  render() {
    var className = this.props.active ? "active": "";
    return (
      <li className={className}>
        <a href={"#" + this.props.uid} onClick={this.handleClick}>
          {this.props.uid}
        </a>
      </li>
    );
  }
}

Tab.propTypes = { onSelect: React.PropTypes.func.isRequired };

export default Tab;
