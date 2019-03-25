import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";

const mapStateToProps = (state, ownProps) => {
  const {
    user: { userList, imageList }
  } = state;
  return {
    userList,
    imageList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const {
    match: {
      params: { term }
    }
  } = ownProps;
  return {
    getSearchByTerm: () => {
      dispatch(userActions.getSearchByTerm(term));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
