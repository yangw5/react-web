import React from "react";
const imgURL = require("../../style/img/404.png");

export default () => {
  return (
    <div style={{ height: "100%", background: "#ececec", overflow: "hidden" }}>
      <img alt="404" src={imgURL} />
    </div>
  );
};
