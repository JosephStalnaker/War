import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/Auth";
import Home from "./components/Home";
import { me } from "./store";

class Routes extends Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { loggedIn } = this.props;

    return (
      <div>
        {loggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    loggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadData() {
      dispatch(me());
    },
  };
};

export default withRouter(connect(mapState, mapDispatch)(Routes));
