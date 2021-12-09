import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";

import { AppActions } from "../../store/model";
import { AppState } from "../../store/rootStore";
import stylesComponent from "./../styles.module.scss";

import { bindActionCreators } from "redux";

interface ConnectedStateProps {}

interface ConnectedDispatchProps {}

type ConnectedState = ConnectedDispatchProps & ConnectedStateProps;

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, AppActions>
) => ({});

const CreateRecipeComponent: React.FunctionComponent<ConnectedState> = ({}) => {
  return <>new</>;
};

export const CreateRecipe = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateRecipeComponent);
