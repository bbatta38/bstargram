import React from "react";
import PropTypes from "prop-types";
import MdClose from "react-ionicons/lib/MdClose";
import styles from "./styles.scss";
import Loading from "components/Loading";

const UserList = props => (
  <div className={styles.container}>
    <div className={styles.box}>
      <header className={styles.header}>
        <h4 className={styles.title}>{props.title}</h4>
        <span onClick={props.closeLikes}>
          <MdClose fontSize="20" color="black" />
        </span>
      </header>
      <div className={styles.content}>{props.loading ? <Loading /> : null}</div>
    </div>
  </div>
);

UserList.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  closeLikes: PropTypes.func.isRequired
};

export default UserList;
