
import React from "react"
import {DropdownButton, MenuItem} from "react-bootstrap"

class DropdownPage extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  renderDropdownButton() {
    return (
      <DropdownButton
        title="select"
      >
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3">Active Item</MenuItem>
        <MenuItem eventKey="4">Separated link</MenuItem>
      </DropdownButton>
    );
  }

  render() {
    return (
      <div className="NoJob">
        What is your current status ?
        <br />
        {this.renderDropdownButton()}
      </div>
    );
  }
}
export default DropdownPage
