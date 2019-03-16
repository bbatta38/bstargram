import React from "react";
import PropTypes from "prop-types";
import IosHeartOutline from "react-ionicons/lib/IosHeartOutline";
import IosTextOutline from "react-ionicons/lib/IosTextOutline";
import styles from "./styles.scss";

const PhotoActions = (props, context) => (
  <div className={styles.action}>
    <div className={styles.column}>
      <span className={styles.icon}>
        <IosHeartOutline fontSize="28" color="black" />
      </span>
      <span className={styles.icon}>
        <IosTextOutline fontSize="28" color="black" />
      </span>
    </div>
    <span className={styles.likesCount}>
      {props.number}{" "}
      {props.number === 1 ? context.t("like") : context.t("likes")}
    </span>
  </div>
);

PhotoActions.contextTypes = {
  t: PropTypes.func.isRequired
};

PhotoActions.propTypes = {
  number: PropTypes.number.isRequired
};

export default PhotoActions;
