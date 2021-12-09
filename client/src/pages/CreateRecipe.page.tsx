import React from "react";
import { connect } from "react-redux";
import { AdminDashboard } from "../components/dashboard/adminDashboard/adminDashboard";
import { CreateRecipe } from "../components/createRecipe/createRecipe";
import { UserDashboard } from "../components/dashboard/userDashboard/userDashboard";
import { AppState } from "../store/rootStore";

interface ConnectedState {}

const mapStateToProps = (state: AppState) => ({});

export const CreateRecipeComponent: React.FC<ConnectedState> = ({}) => {
  return (
    <>
      {" "}
      <CreateRecipe />{" "}
    </>
  );
};

export const CreateRecipePage = connect(mapStateToProps)(CreateRecipeComponent);
