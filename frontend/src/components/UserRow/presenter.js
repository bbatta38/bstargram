import React from "react";
import styles from "./styles.scss";

const UserRow = props => (
  <div className={styles.container}>
    {console.log(props)}
    <div className={styles.column}>
      <img
        src={props.profile_image || require("images/noPhoto.png")}
        alt={props.username}
        className={styles.avatar}
      />
      <div className={styles.user}>
        <span className={styles.username}>{props.username}</span>
      </div>
    </div>
    <div className={styles.column}>
      <button className={styles.button}>Follow</button>
    </div>
  </div>
);

export default UserRow;
