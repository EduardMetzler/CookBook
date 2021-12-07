import React from "react";

import { connect } from "react-redux";
import { AppState } from "../../../store/rootStore";

interface ConnectedState {}

const mapStateToProps = (state: AppState) => ({});

export const AdminDashboardComponent: React.FC<ConnectedState> = ({}) => {
  return <div>AdminDashboardComponent</div>;
};

export const AdminDashboard = connect(mapStateToProps)(AdminDashboardComponent);
