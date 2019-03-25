import React from "react";
import styles from "./styles.scss";
import Loading from "components/Loading";
import UserRow from "components/UserRow";
import ImageDisplay from "components/ImageDisplay";

const Search = props => {
  if (props.loading) {
    return <LoadingSearch />;
  } else {
    return <RenderSearch {...props} />;
  }
};

const LoadingSearch = () => (
  <div className={styles.container}>
    <Loading />
  </div>
);

const RenderSearch = props => {
  const { userList, imageList } = props;
  return (
    <div className={styles.container}>
      <div className={styles.listContainer}>
        <h3 className={styles.title}>Users</h3>
        <div className={styles.userList}>
          {userList.length < 1 && <NotFound text="Nothing Found :(" />}
          {userList.length > 0 &&
            userList.map(user => {
              return <UserRow vertical={true} {...user} key={user.id} />;
            })}
        </div>
      </div>
      <div className={styles.listContainer}>
        <h3 className={styles.title}>Photos</h3>
        <div className={styles.userList}>
          {imageList.length < 1 && <NotFound text="Nothing Found :(" />}
          {imageList.length > 0 &&
            imageList.map(image => {
              return <ImageDisplay image={image} key={image.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

const NotFound = props => <span className={styles.notFound}>{props.text}</span>;

export default Search;
