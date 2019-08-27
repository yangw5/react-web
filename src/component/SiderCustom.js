import React, { PureComponent } from "react";
import { Layout } from "antd";
import routes from "../routes/config";
import SiderMenu from "./SiderMenu";

const { Sider } = Layout;

class SiderCustom extends PureComponent {
  static getDerivedStateFromProps(props, state) {}
  state = {
    selectedKey: ""
  };
  static setMenuOpen = props => {
    const { pathname } = props.location;
    return {
      openKey:
        "/" +
        pathname
          .split("/")
          .slice(1, 3)
          .join("/"),
      selectedKey:
        "/" +
        pathname
          .split("/")
          .slice(1, 4)
          .join("/")
    };
  };
  menuClick = e => {
    this.setState({
      selectedKey: e.key
    });
  };
  render() {
    return (
      <Sider
        trigger={null}
        style={{ padding: "0px", width: "35px" }}
        collapsible
        collapsed={this.props.collapsed}>
        <SiderMenu
          onClick={this.menuClick}
          selectedKeys={[this.state.selectedKey]}
          menus={routes.menus}
        />
      </Sider>
    );
  }
}

export default SiderCustom;
