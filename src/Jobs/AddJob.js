
import React from "react"
import {DropdownButton, MenuItem} from "react-bootstrap"
import PropTypes from "prop-types"

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

  handleChange(name, event) {
    this.setState({name: event.target.value});
  }

  selectItem = (item) => {
    this.setState({
      occupation: item,
    })
  }

  renderDropdownButton() {
    return (
      <DropdownButton
        title="select"
      >
        <MenuItem eventKey="1" onClick={this.selectItem.bind(this, "First Job")}>First Job</MenuItem>
        <MenuItem eventKey="2" onClick={this.selectItem.bind(this, "Second Job")}>Second Job</MenuItem>
        <MenuItem eventKey="3" onClick={this.selectItem.bind(this, "Third Job")}>Third Job</MenuItem>
        <MenuItem eventKey="4" onClick={this.selectItem.bind(this, "Fourth Job")}>Fourth Job</MenuItem>
      </DropdownButton>
    );
  }
  render() {
    return (
      <div className="AddJob">
        Job {this.props.jobNo}
        <br />
        What is your occupation ?
        <br />
        {this.renderDropdownButton()}
        <br />
        <div className="AddJob-input">
          Company name
          <input type="text" value={this.state.company} onChange={this.handleChange(company)} />
        </div>
        <br />
        <div className="AddJob-input">
          Income
          <input type="text" value={this.state.income} onChange={this.handleChange(income)} />
        </div>
        <br />
      </div>
    );
  }
}

export default DropdownPage
DropdownPage.propTypes = {
  jobNo: PropTypes.number.isRequired
}
