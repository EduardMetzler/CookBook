import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { AppState } from "../../../store/rootStore";

interface ConnectedState {}

const mapStateToProps = (state: AppState) => ({});

export const userDashboardComponent: React.FC<ConnectedState> = ({}) => {
  return (
    <Link to="/create-recipe">
      <button className="waves-effect waves-light btn-small">
        neues Rezept
      </button>
    </Link>
  );
};

export const UserDashboard = connect(mapStateToProps)(userDashboardComponent);
