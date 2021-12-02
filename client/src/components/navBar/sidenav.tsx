import React from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutSuccess } from "../../store/auth/authAction";
import { AppState } from "../../store/rootStore";

interface ConnectedState {
  isAuthenticated: boolean;
  firstName: String;
}

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  firstName: state.userDatenReducer.firstName,
});

export const SidenavComponent: React.FC<ConnectedState> = ({
  isAuthenticated,
  firstName,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <ul id="slide-out" className="sidenav">
        <li>
          {" "}
          <Link to="/">CookBook </Link>{" "}
        </li>

        <li>
          {!isAuthenticated ? (
            <>
              <Link to="login">Anmelden </Link>
            </>
          ) : (
            <Link to="/dashboard"> Hallo {firstName} ! </Link>
          )}
        </li>

        <li>
          {isAuthenticated ? (
            <Link onClick={() => dispatch(logoutSuccess())} to="/">
              Abmelden{" "}
            </Link>
          ) : (
            <Link to="register">Registrieren</Link>
          )}
        </li>
      </ul>
    </>
  );
};

export const Sidenav = connect(mapStateToProps)(SidenavComponent);
