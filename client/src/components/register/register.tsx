import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import { errorsDelete, newUserRegister } from "../../store/auth/authAction";
import { AppActions } from "../../store/model";
import { AppState } from "../../store/rootStore";

import styles from "./register.module.scss";
import stylesComponent from "./../styles.module.scss";

import { bindActionCreators } from "redux";

interface ConnectedStateProps {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string;
}

interface ConnectedDispatchProps {
  newUserRegister: (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    repeatedPassword: string
  ) => void;
}

type ConnectedState = ConnectedDispatchProps & ConnectedStateProps;

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  isLoading: state.authReducer.isLoading,
  error: state.authReducer.error,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, AppActions>
) => ({
  newUserRegister: bindActionCreators(newUserRegister, dispatch),
});

const RegisterComponent: React.FunctionComponent<ConnectedState> = ({
  newUserRegister,
  isLoading,
  error,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(errorsDelete());
  }, []);

  const handleSubmit = (event: any) => {
    newUserRegister(firstName, lastName, email, password, repeatedPassword);

    event.preventDefault();
  };

  const checkData = () => {
    if (
      firstName.length < 1 ||
      email.length < 1 ||
      password.length < 6 ||
      password !== repeatedPassword ||
      isLoading
    ) {
      return "btn disabled";
    }
    return "btn";
  };

  return (
    <div className={`${styles.registerContainer} row`}>
      <div className="col m10 offset-m1 l8 offset-l2 xl6 offset-xl3">
        <div className="card">
          <div className="card-content">
            <form onSubmit={handleSubmit}>
              <label>
                First Name:
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              <label>
                E-Mail:
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <label>
                Repeat Password:
                <input
                  type="password"
                  value={repeatedPassword}
                  onChange={(e) => setRepeatedPassword(e.target.value)}
                />
              </label>
              <input
                type="submit"
                value="Registrieren"
                className={checkData()}
              />
              <Link to="/login">
                <span className={styles.loginLink}>Anmelden</span>
              </Link>
            </form>
          </div>
          <div className={stylesComponent.warningPen}>
            {error ? (
              <h5 className={stylesComponent.warningPen}>{error}</h5>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Register = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterComponent);
