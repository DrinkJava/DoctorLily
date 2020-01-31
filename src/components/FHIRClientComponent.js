import React, { Component } from "react";
import { oauth2 as SMART } from "fhirclient";
import { FHIRClientContext } from "../FHIRClientContext"

export default class FHIRClientComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: null,
      error: null
    };
    this.setClient = client => this.setState({ client });
  }

  componentDidMount() {
    SMART.ready()
      .then(client => this.setState({ client }))
      .catch(error => this.setState({ error }));
  };

  render() {
    if (this.state.error) {
      return <pre>{this.state.error.message}</pre>;
    }
    return (
      <FHIRClientContext.Provider
        value={{
          client: this.state.client,
          setClient: this.setClient
        }}
        >
        <FHIRClientContext.Consumer>
          {({ client }) => {
            return this.props.children;
          }}
        </FHIRClientContext.Consumer>
      </FHIRClientContext.Provider>
    );
  }
}
