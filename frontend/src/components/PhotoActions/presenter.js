import React from "react";
import PropTypes from "prop-types";
import IosHeartOutline from "react-ionicons/lib/IosHeartOutline";
import IosHeart from "react-ionicons/lib/IosHeart";
import IosTextOutline from "react-ionicons/lib/IosTextOutline";
import styles from "./styles.scss";

const PhotoActions = (props, context) => (
  <div className={styles.action}>
    <div className={styles.column}>
      <span className={styles.icon} onClick={props.handleHeartClick}>
        {props.isLiked ? (
          <IosHeart fontSize="28" color="red" />
        ) : (
          <IosHeartOutline fontSize="28" color="black" />
        )}
      </span>
      <span className={styles.icon}>
        <IosTextOutline fontSize="28" color="black" />
      </span>
    </div>
    <span className={styles.likesCount} onClick={props.openLikes}>
      {props.number}{" "}
      {props.number === 1 ? context.t("like") : context.t("likes")}
    </span>
  </div>
);

PhotoActions.contextTypes = {
  t: PropTypes.func.isRequired
};

PhotoActions.propTypes = {
  number: PropTypes.number.isRequired,
  isLiked: PropTypes.bool.isRequired,
  photoId: PropTypes.number.isRequired,
  handleHeartClick: PropTypes.func.isRequired,
  openLikes: PropTypes.func.isRequired
};

export default PhotoActions;
