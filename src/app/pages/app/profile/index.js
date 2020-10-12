import React from "react";
import AppLayout from "../../../layouts/appLayout";
import Profile from "../../../modules/app/profile"

class Home extends React.Component {
  render() {
    return <AppLayout><Profile /></AppLayout>;
  }
}

export default Home;
