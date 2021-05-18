import React from "react";
import "../css/Loading.css";

import sfLogo from "../assets/sf-logo.svg";

class Loading extends React.Component {
  render() {
    return (
      <div id="Loading">
        <img src={sfLogo} alt="logo" />
      </div>
    );
  }
}

export default Loading;
