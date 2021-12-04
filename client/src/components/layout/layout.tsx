import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { AppState } from "../../store/rootStore";

import NavBar from "../navBar/navBar";
import { Footer } from "../footer/footer";

import { loginSuccess } from "../../store/auth/authAction";
import { ThunkDispatch } from "redux-thunk";
import { AppActions } from "../../store/model";

import styles from "./layout.module.scss";

import {
  getUserDaten,
  userDatenDelete,
} from "../../store/userDaten/userDatenAction";
import { bindActionCreators } from "redux";

interface ConnectedStateProps {
  isAuthenticated: boolean;
  firstName: string;
}

interface ConnectedDispatchProps {
  getUserDaten: () => void;
}

type ConnectedState = ConnectedDispatchProps & ConnectedStateProps;

const mapStateToProps = (state: AppState) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  firstName: state.userDatenReducer.firstName,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AppState, {}, AppActions>
) => ({
  getUserDaten: bindActionCreators(getUserDaten, dispatch),
});

const LayoutComponent: React.FunctionComponent<ConnectedState> = ({
  isAuthenticated,
  firstName,
  getUserDaten,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated && !firstName) {
      getUserDaten();
    }
    if (!isAuthenticated && firstName) {
      dispatch(userDatenDelete());
    }
    if (localStorage.getItem("token") && !isAuthenticated) {
      dispatch(loginSuccess());
    }
  }, [isAuthenticated, firstName, localStorage.getItem("token")]);

  return (
    <>
      {(isAuthenticated && localStorage.getItem("token") && firstName) ||
      !localStorage.getItem("token") ? (
        <div>
          <div className={`${styles.contentWitoutFooter}`}>
            <div className={`${styles.main}`}>
              <header>
                <NavBar />
              </header>
              <main>
                {" "}
                <Outlet />
              </main>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        "loading"
      )}
    </>
  );
};

export const Layout = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutComponent);
