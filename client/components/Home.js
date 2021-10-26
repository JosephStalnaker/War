import React from "react";
import { connect } from "react-redux";
import Table from "./Table";

export const Home = (props) => {
  const { username } = props;

  return (
    <div className="greeting">
      <h3>Welcome, {username}</h3>
      <Table />
    </div>
  );
};

const mapState = (state) => {
  return {
    username: state.auth.username,
  };
};

export default connect(mapState)(Home);
