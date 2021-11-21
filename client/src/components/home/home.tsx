import React from "react";
import { connect } from "react-redux";

interface ConnectedState {}

const mapStateToProps = () => ({});

const HomeComponent: React.FunctionComponent<ConnectedState> = ({}) => {
  return <>"home"</>;
};

export const Home = connect(mapStateToProps)(HomeComponent);
