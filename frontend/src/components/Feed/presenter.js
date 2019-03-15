import React from "react";
import PropTypes from "prop-types";
import Loading from "components/Loading";
import styles from "./styles.scss";

const Feed = props => {
  const { loading } = props;
  if (loading) {
    return <LoadingFeed />;
  } else if (props.feed) {
    return <RenderFeed {...props} />;
  }
};

const LoadingFeed = props => (
  <div className={styles.feed}>
    <Loading />
  </div>
);

const RenderFeed = props => (
  <div className={styles.feed}>{props.feed.map(post => post.caption)}</div>
);

Feed.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Feed;
