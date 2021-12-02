import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { ThunkDispatch } from "redux-thunk";
import { userLogin } from "../../store/auth/authAction";
import { AppActions } from "../../store/model";
import { AppState } from "../../store/rootStore";

import { bindActionCreators } from "redux";

interface ConnectedStateProps {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string;
}

interface ConnectedDispatchProps {
  userLogin: (email: string, password: string) => void;
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
  userLogin: bindActionCreators(userLogin, dispatch),
});

const LoginComponent: React.FunctionComponent<ConnectedState> = ({
  userLogin,
  isLoading,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    userLogin(email, password);
  };

  const checkData = () => {
    if (email.length < 1 || password.length < 6 || isLoading) {
      return "btn disabled";
    }
    return "btn";
  };

  return (
    <>
      <div className="row login-container">
        <div className="col m10 offset-m1 l8 offset-l2 xl6 offset-xl3">
          <div className="card">
            <div className="card-content">
              <form onSubmit={handleSubmit}>
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
                <input type="submit" value="Anmelden" className={checkData()} />
                <Link to="/register">
                  <span className="register-link"> Registrieren</span>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);
