import React from "react";
import { connect } from "react-redux";
import { AdminDashboard } from "../components/dashboard/adminDashboard/adminDashboard";
import { UserDashboard } from "../components/dashboard/userDashboard/userDashboard";
import { AppState } from "../store/rootStore";

interface ConnectedState {
  admin: boolean;
  firstName: String;
}

const mapStateToProps = (state: AppState) => ({
  admin: state.userDatenReducer.admin,
  firstName: state.userDatenReducer.firstName,
});

export const DashboardComponent: React.FC<ConnectedState> = ({
  admin,
  firstName,
}) => {
  return <>{firstName && admin ? <AdminDashboard /> : <UserDashboard />}</>;
};

export const DashboardPage = connect(mapStateToProps)(DashboardComponent);
