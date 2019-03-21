import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const UserRow = props => (
  <div className={styles.container}>
    <div className={styles.column}>
      <img
        src={props.profile_image || require("images/noPhoto.png")}
        alt={props.username}
        className={styles.avatar}
      />
      <div className={styles.user}>
        <span className={styles.username}>{props.username}</span>
        <span className={styles.name}>{props.name}</span>
      </div>
    </div>
    <div className={styles.column}>
      {props.isMe ? null : <FollowBtn following={props.following} />}
    </div>
  </div>
);

const FollowBtn = props => {
  if (props.following) {
    return <button className={styles.whiteButton}>Following</button>;
  } else {
    return <button className={styles.button}>Follow</button>;
  }
};

UserRow.propTypes = {
  profile_image: PropTypes.string,
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  following: PropTypes.bool.isRequired,
  isMe: PropTypes.bool.isRequired
};

export default UserRow;
