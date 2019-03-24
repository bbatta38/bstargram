import React from "react";
import PropTypes from "prop-types";
import Loading from "components/Loading";
import UserRow from "components/UserRow";
import styles from "./styles.scss";

const Explore = props => {
  const { loading } = props;
  if (loading) {
    return <LoadingExplore />;
  } else if (props.userList) {
    return <RenderExplore {...props} />;
  }
};

const LoadingExplore = props => (
  <div className={styles.explore}>
    <Loading />
  </div>
);

const RenderExplore = props => (
  <div className={styles.explore}>
    {props.userList.map(user => (
      <UserRow {...user} big={true} key={user.id} />
    ))}
  </div>
);

Explore.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Explore;
