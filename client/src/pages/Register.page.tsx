import React from "react";
import { connect } from "react-redux";

import { Register } from "../components/register/register";

interface ConnectedState {}

const mapStateToProps = () => ({});

export const RegisterComponent: React.FC<ConnectedState> = ({}) => {
  return <Register />;
};

export const RegisterPage = connect(mapStateToProps)(RegisterComponent);
