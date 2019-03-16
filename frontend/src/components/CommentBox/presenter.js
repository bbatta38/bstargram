import React from "react";
import styles from "./styles.scss";
import Textarea from "react-textarea-autosize";

const CommentBox = props => (
  <form className={styles.commentBox}>
    <Textarea className={styles.input} placeholder="Add a comment..." />
  </form>
);

export default CommentBox;
