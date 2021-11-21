import React from "react";
import { connect } from "react-redux";

import { Home } from "../components/home/home";

interface ConnectedState {}

const mapStateToProps = () => ({});

export const HomeComponent: React.FunctionComponent<ConnectedState> = ({}) => {
  return <Home />;
};

export const HomePage = connect(mapStateToProps)(HomeComponent);
