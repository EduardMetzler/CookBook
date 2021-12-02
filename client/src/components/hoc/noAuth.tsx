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

const NoAuthComponent: React.FunctionComponent<ConnectedState> = ({
  children,
  isAuthenticated,
}) => {
  const location = useLocation();
  const auth = isAuthenticated;
  const fromPage = location.state?.from?.pathname || "/";

  if (auth) {
    return <Navigate to={`${fromPage}`} state={{ from: location }} />;
  }
  return children;
};

export const NoAuth = connect(mapStateToProps)(NoAuthComponent);
