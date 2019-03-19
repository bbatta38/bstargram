import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import PhotoActions from "components/PhotoActions";
import PhotoComments from "components/PhotoComments";
import Timestamp from "components/Timestamp";
import CommentBox from "components/CommentBox";

const FeedPhoto = (props, context) => (
  <div className={styles.feedPhoto}>
    <header className={styles.header}>
      <img
        src={props.creator.profile_image || require("images/noPhoto.png")}
        alt={props.username}
        className={styles.image}
      />
      <div className={styles.headerColumn}>
        <span className={styles.creator}>{props.creator.username}</span>
        <span className={styles.location}>{props.location}</span>
      </div>
    </header>
    <img src={props.file} alt={props.caption} className={styles.mainImage} />
    <div className={styles.meta}>
      <PhotoActions
        number={props.likes_count}
        isLiked={props.is_liked}
        photoId={props.id}
      />
      <PhotoComments
        creator={props.creator.username}
        caption={props.caption}
        comments={props.comments}
      />
      <Timestamp time={props.natural_time} />
      <CommentBox photoId={props.id} />
    </div>
  </div>
);

FeedPhoto.propTypes = {
  creator: PropTypes.shape({
    profile_image: PropTypes.string,
    username: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  likes_count: PropTypes.number.isRequired,
  caption: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      creator: PropTypes.shape({
        profile_image: PropTypes.string,
        username: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired,
  natural_time: PropTypes.string.isRequired,
  is_liked: PropTypes.bool.isRequired
};

export default FeedPhoto;
