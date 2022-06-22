import { useState, useEffect, Fragment, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ClearAllOutlinedIcon from "@material-ui/icons/ClearAllOutlined";
import { openDrawer, closeDrawer } from "../store/actions/actions";
import { connect } from "react-redux";

function MainNavBar(props) {
  const ref = useRef();

  const [style, setStyle] = useState({
    width: "300px",
    background: "#3b988d",
    border: "#45867e",
    transition: " 1s all"
  });

  const handleclick = (e) => {
    props.openDrawer();
  };

  return (
    <nav
      className={`navbar  navbar-expand-lg navbar-dark bg-light-custom fixed-top  `}
    >
      <div className="container-fluid">
        {props.location.pathname === "/dashboard" && (
          <IconButton
            onClick={handleclick}
            color="secondary"
            style={{ color: "white" }}
            aria-label="upload picture"
            component="span"
          >
            <ClearAllOutlinedIcon></ClearAllOutlinedIcon>
          </IconButton>
        )}

        <Link to="/" className="navbar-brand">
          KamalKant 
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                activeStyle={{
                  fontWeight: "bold"
                }}
                to="/courses"
                className="nav-link"
              >
                 Fist Link
              </NavLink>
            </li>

            {props.user ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {props.user.name}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/">
                     Text 1
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Text 2
                  </Link>

                  <div className="dropdown-divider"></div>
                  <Link
                    onClick={props.logout}
                    className="dropdown-item"
                    to="/logout"
                  >
                    Sign out
                  </Link>
                </div>
              </li>
            ) : (
              <Fragment>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                     Second Link
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Third link
                  </Link>
                </li>
              </Fragment>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    ui: state.ui
  };
};
export default connect(mapStateToProps, {
  openDrawer
})(withRouter(MainNavBar));
