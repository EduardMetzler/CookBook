import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

interface ConnectedState {}

const mapStateToProps = () => ({});

const FooterComponent: React.FunctionComponent<ConnectedState> = ({}) => {
  return (
    <footer className={`page-footer `}>
      <div className={`container`}>
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">Content</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li>
                <Link className="grey-text text-lighten-3" to="#!">
                  Link
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="#!">
                  Link
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="#!">
                  Link
                </Link>
              </li>
              <li>
                <Link className="grey-text text-lighten-3" to="#!">
                  Link
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          &copy;{new Date().getFullYear()} Eduard Metzler, Inc.
          <a className="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
};

export const Footer = connect(mapStateToProps)(FooterComponent);
