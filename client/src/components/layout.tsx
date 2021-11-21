import React from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";

interface ConnectedState {}

const mapStateToProps = () => ({});

const LayoutComponent: React.FunctionComponent<ConnectedState> = ({}) => {
  return (
    <>
      <header>
        <div>navbar</div>
      </header>
      <Outlet />
      <div>footer</div>
    </>
  );
};

export const Layout = connect(mapStateToProps)(LayoutComponent);
