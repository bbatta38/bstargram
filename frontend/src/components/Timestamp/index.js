import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const Timestamp = props => <div className={styles.time}>{props.time}</div>;

Timestamp.propTypes = {
  time: PropTypes.string.isRequired
};

export default Timestamp;
