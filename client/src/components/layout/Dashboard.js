import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {}
)(Dashboard);
