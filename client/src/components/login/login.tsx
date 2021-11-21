import React from "react";
import { connect } from "react-redux";

interface ConnectedState {}

const mapStateToProps = () => ({});

const LoginComponent: React.FunctionComponent<ConnectedState> = ({}) => {
  return <>"login"</>;
};

export const Login = connect(mapStateToProps)(LoginComponent);
