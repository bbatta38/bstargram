import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick: () => {
      if (ownProps.following) {
        dispatch(userActions.unfollowUser(ownProps.id));
      } else {
        dispatch(userActions.followUser(ownProps.id));
      }
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
