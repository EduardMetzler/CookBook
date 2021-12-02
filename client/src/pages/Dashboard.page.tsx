import React from "react";
import { connect } from "react-redux";

interface ConnectedState {}

const mapStateToProps = () => ({});

export const DashboardComponent: React.FunctionComponent<ConnectedState> =
  ({}) => {
    return <div>DashboardComponent</div>;
  };

export const DashboardPage = connect(mapStateToProps)(DashboardComponent);
