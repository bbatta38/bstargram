import React, { Component } from "react";
import Explore from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    getExplore: PropTypes.func.isRequired
  };
  componentDidMount() {
    const { getExplore, userList } = this.props;
    if (!userList) {
      getExplore();
    } else {
      this.setState({
        loading: false
      });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.userList) {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    const { userList } = this.props;
    return <Explore {...this.state} userList={userList} />;
  }
}

export default Container;
