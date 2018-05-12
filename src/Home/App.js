import React, {Component} from "react"
import {Tabs, Tab, Jumbotron, Grid} from "react-bootstrap"
import Todo from "../Todo/App"
import Jobs from "../Jobs/App"

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Test App</h1>
          </Grid>
        </Jumbotron>

        <Grid>
          <Tabs defaultActiveKey={1} id="tabs">
            <Tab eventKey={1} title="Jobs" style={{padding: 10}}>
              <Jobs />
            </Tab>
            <Tab eventKey={2} title="Todo" style={{padding: 10}}>
              <Todo />
            </Tab>
          </Tabs>
        </Grid>
      </div>
    )
  }
}
