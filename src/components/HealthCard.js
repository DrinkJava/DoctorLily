import React from "react";
import { FHIRClientContext } from "../FHIRClientContext";
import { oauth2 as SMART } from "fhirclient";


function PatientName({ name = [] }) {
  let entry =
      name.find(nameRecord => nameRecord.use === "official") || name[0];
  if (!entry) {
    return <h1>No Name</h1>;
  }
  return <h1>{entry.given.join(" ") + " " + entry.family}</h1>;
}

function PatientBanner(patient) {
  console.log(patient);
  return (
      <div>
      <PatientName name={patient.name} />
      <span>
      Gender: <b>{patient.gender}</b>,{" "}
    </span>
      <span>
      DOB: <b>{patient.id}</b>
      </span>

      </div>
  );
}

export default class HealthCard extends React.Component {
  static contextType = FHIRClientContext;
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      patient: null,
      error: null,
      client: null

    };
  }
  componentDidMount() {
    SMART.ready()
      .then(c => this.setState({ client: c, loading:false }))
      .catch(error => this.setState({ error }));
  }
  render() {
    if (this.state.client) {
      this._loader = this.state.client.patient
        .read()
        .then(patient => {
          this.setState({ patient, loading: false, error: null });
        })
        .catch(error => {
          this.setState({ error, loading: false });
        });
    }

    const { error, loading, patient } = this.state;
    if (loading) {
      return this.state.patient;
    }
    if (error) {
      return error.message;
    }
    //const pat = this.state.client.patient.read();
    return <PatientBanner {...patient} />;
  }
}

HealthCard.contextType = FHIRClientContext;
