import React from "react";
import { connect } from "react-redux";

interface ConnectedState {}

const mapStateToProps = () => ({});

export const ErrorComponent: React.FunctionComponent<ConnectedState> = ({}) => {
  return <div>error</div>;
};

export const ErrorPage = connect(mapStateToProps)(ErrorComponent);
