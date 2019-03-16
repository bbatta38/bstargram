import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const PhotoComments = props => (
  <div className={styles.comments}>
    <ul className={styles.list}>
      <Comment creator={props.creator} comment={props.caption} />
      {props.comments.map(comment => (
        <Comment
          creator={comment.creator.username}
          comment={comment.message}
          key={comment.id}
        />
      ))}
    </ul>
  </div>
);

const Comment = props => (
  <li className={styles.comment}>
    <span className={styles.username}>{props.creator}</span>
    <span className={styles.message}>{props.comment}</span>
  </li>
);

PhotoComments.propTypes = {
  creator: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired
};

export default PhotoComments;
