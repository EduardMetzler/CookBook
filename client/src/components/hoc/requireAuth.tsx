import React from "react";
import { connect } from "react-redux";
import { Navigate, useLocation } from "react-router";
import { AppState } from "../../store/rootStore";

interface ConnectedStateProps {
  isAuthenticated: boolean;
  children: any;
}

type ConnectedState = ConnectedStateProps;

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

const RequireAuthComponent: React.FunctionComponent<ConnectedState> = ({
  children,
  isAuthenticated,
}) => {
  const location = useLocation();
  const auth = isAuthenticated;

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export const RequireAuth = connect(mapStateToProps)(RequireAuthComponent);
