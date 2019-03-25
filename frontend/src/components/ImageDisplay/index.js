import React from "react";
import PropTypes from "prop-types";
import IosHeart from "react-ionicons/lib/IosHeart";
import IosText from "react-ionicons/lib/IosText";
import styles from "./styles.scss";

const ImageDisplay = props => {
  const { file, comments_count, likes_count, caption } = props.image;
  return (
    <div className={styles.container}>
      <img src={file} className={styles.photo} alt={caption} />
      <div className={styles.overlay}>
        <span className={styles.data}>
          <IosHeart fontSize="22px" color="white" /> {likes_count}
        </span>
        <span className={styles.data}>
          <IosText fontSize="22px" color="white" /> {comments_count}
        </span>
      </div>
    </div>
  );
};

ImageDisplay.propTypes = {
  image: PropTypes.shape({
    file: PropTypes.string.isRequired,
    comments_count: PropTypes.number.isRequired,
    likes_count: PropTypes.number.isRequired,
    caption: PropTypes.string.isRequired
  }).isRequired
};

export default ImageDisplay;
