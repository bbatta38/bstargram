import React from "react";
import styles from "./styles.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import IosCompassOutline from "react-ionicons/lib/IosCompassOutline";
import IosHeartOutline from "react-ionicons/lib/IosHeartOutline";
import IosPersonOutline from "react-ionicons/lib/IosPersonOutline";

const Navigation = (props, context) => (
  <div className={styles.navigation}>
    <div className={styles.inner}>
      <div className={styles.column}>
        <Link to="/">
          <img
            src={require("images/logo.png")}
            className={styles.logo}
            alt={context.t("logo")}
          />
        </Link>
      </div>
      <div className={styles.column}>
        <input
          type="text"
          placeholder={context.t("search")}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.column}>
        <div className={styles.navIcon}>
          <Link to="/explore">
            <IosCompassOutline fontSize="28" color="black" />
          </Link>
        </div>
        <div className={styles.navIcon}>
          <IosHeartOutline fontSize="28" color="black" />
        </div>
        <div className={styles.navIcon}>
          <Link to="/profile">
            <IosPersonOutline fontSize="28" color="black" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

Navigation.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Navigation;
