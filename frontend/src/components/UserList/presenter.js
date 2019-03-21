import React from "react";
import PropTypes from "prop-types";
import MdClose from "react-ionicons/lib/MdClose";
import styles from "./styles.scss";
import Loading from "components/Loading";
import UserRow from "components/UserRow";

const UserList = props => (
  <div className={styles.container}>
    <div className={styles.box}>
      <header className={styles.header}>
        <h4 className={styles.title}>{props.title}</h4>
        <span className={styles.closeButton} onClick={props.closeLikes}>
          <MdClose fontSize="20" color="black" />
        </span>
      </header>
      {(() => {
        if (props.loading) {
          return <LoadingUserList />;
        } else {
          return <RenderUserList userList={props.userList} />;
        }
      })()}
    </div>
  </div>
);

const LoadingUserList = () => (
  <div className={styles.content}>
    <Loading />
  </div>
);
const RenderUserList = props => {
  return props.userList.map(user => <UserRow {...user} key={user.id} />);
};

UserList.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  closeLikes: PropTypes.func.isRequired,
  userList: PropTypes.array
};

export default UserList;
