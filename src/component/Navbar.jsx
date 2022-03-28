import React from "react";
import { authAction } from "../store/auth";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(authAction.logout());
  };

  return (
    <div>
      <div className={styles.Navbar}>
        <div className={styles.Heading}>Demo Application</div>
        <div className={styles.bar}>
          {auth.isLoggedIn && (
            <div>
              <NavLink
                activeClassName={styles.active}
                to="/"
                onClick={handleLogout}
              >
                Logout
              </NavLink>
            </div>
          )}
          {!auth.isLoggedIn && (
            <div>
              <NavLink activeClassName={styles.active} to="/login">
                login
              </NavLink>
            </div>
          )}
          {!auth.isLoggedIn && (
            <div>
              <NavLink activeClassName={styles.active} to="/register">
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
