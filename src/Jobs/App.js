import React, {Component} from "react"
import {Button, ButtonGroup} from "react-bootstrap"
import NoJob from "./NoJob"
import AddJob from "./AddJob"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      jobCount: 0
    }
  }

  handleJobCount(jobCount) {
    this.setState({jobCount})
  }

  returnJobStatus = () => {
    const {jobCount} = this.state
    if (jobCount === 0) {
      return <NoJob />
    }
    const items = [];
    for (let i = 0; i < this.state.jobCount; i++) {
      items.push(<AddJob key={i} jobNo={i + 1} />);
    }
    return items.map((i) => i)
  }

  render() {
    const {jobCount} = this.state

    return (
      <div>
        <ButtonGroup>
          <Button onClick={this.handleJobCount.bind(this, 0)} className={jobCount === 0 ? "selected" : null}>0</Button>
          <Button onClick={this.handleJobCount.bind(this, 1)} className={jobCount === 1 ? "selected" : null}>1</Button>
          <Button onClick={this.handleJobCount.bind(this, 2)} className={jobCount === 2 ? "selected" : null}>2</Button>
          <Button onClick={this.handleJobCount.bind(this, 3)} className={jobCount === 3 ? "selected" : null}>3</Button>
        </ButtonGroup>
        <br />
        <br />
        {this.returnJobStatus()}
      </div>
    )
  }
}

