import React, { Component } from "react";
import { Layout } from "antd";
import styles from "./HeaderCustom.module.less";
import classnames from "classnames";
import "./style/index.less";
import "./style/antd/index.less";

const { Header } = Layout;

class HeaderCustom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      istitle: true
    };
  }
  render() {
    return (
      <Layout>
        <Header className={classnames(styles["header"])}>
          <div className={"header-logo"}>
            <div className={"header-title"}>
              <img
                className={"logo-img"}
                src={require("./style/img/app-logo.png")}
              />
              {this.state.istitle ? (
                <div className={"logo-name"}>小伍花钱</div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className={`${styles["header-right"]}`}>左边</div>
        </Header>
      </Layout>
    );
  }
}

export default HeaderCustom;
