import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../Actions";
import { Component } from "react";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  render() {
    console.log(this.props.streams);
    return <div>StreamList</div>;
  }
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
