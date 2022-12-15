import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../Actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <div>
        <h3>Create Stream</h3>
        <StreamForm onSubmit={this.onSubmit} /> {/*Created a seperate componet StreamForm to reuse code in streamcreate and streamedit */}
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
