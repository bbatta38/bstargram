import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Textarea from "react-textarea-autosize";

const CommentBox = props => (
  <form className={styles.commentBox}>
    <Textarea
      className={styles.input}
      placeholder="Add a comment..."
      onChange={props.handleChangeEvent}
      onKeyPress={props.handleKeyPress}
      value={props.comment}
    />
  </form>
);

CommentBox.propTypes = {
  comment: PropTypes.string.isRequired,
  handleChangeEvent: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  photoId: PropTypes.number.isRequired
};

export default CommentBox;
