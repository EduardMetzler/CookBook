import React from "react";

import { connect } from "react-redux";

import { Login } from "../components/login/login";

interface ConnectedState {}

const mapStateToProps = () => ({});

export const LoginComponent: React.FC<ConnectedState> = ({}) => {
  return <Login />;
};

export const LoginPage = connect(mapStateToProps)(LoginComponent);
