import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = state => {
  const {
    user: { userList }
  } = state;
  return {
    userList: userList
  };
};

export default connect(mapStateToProps)(Container);
