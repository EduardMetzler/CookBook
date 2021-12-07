import React from "react";
import { connect } from "react-redux";

import { AppState } from "../../../store/rootStore";

interface ConnectedState {}

const mapStateToProps = (state: AppState) => ({});

export const userDashboardComponent: React.FC<ConnectedState> = ({}) => {
  return <div>userDashboardComponent</div>;
};

export const UserDashboard = connect(mapStateToProps)(userDashboardComponent);
