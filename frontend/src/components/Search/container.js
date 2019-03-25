import React, { Component } from "react";
import PropTypes from "prop-types";
import Search from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    getSearchByTerm: PropTypes.func.isRequired,
    userList: PropTypes.array,
    imageList: PropTypes.array
  };
  componentDidMount() {
    const { getSearchByTerm } = this.props;
    getSearchByTerm();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.userList && nextProps.imageList) {
      this.setState({
        loading: false
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params !== this.props.match.params) {
      const { getSearchByTerm } = this.props;
      getSearchByTerm();
    }
  }

  render() {
    const { userList, imageList } = this.props;
    return <Search {...this.state} userList={userList} imageList={imageList} />;
  }
}

export default Container;
