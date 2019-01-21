import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getEmployees } from "../../actions/empoyeeActions";

class Employees extends Component {
  componentDidMount() {
    this.props.getEmployees();
  }

  render() {
    const employeeData = this.props.employees.employees.map(emp => (
      <tr key={emp._id}>
        <td>{emp.name}</td>
        <td>{emp.mobile}</td>
        <td>{emp.email}</td>
      </tr>
    ));
    return (
      <React.Fragment>
        <h4 className="mb-4">Education Credentials</h4>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
              </tr>
              {employeeData}
            </thead>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  employees: state.employees,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getEmployees }
)(Employees);
