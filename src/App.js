import React from "react";
import "./App.css";
import Cp from "./component";
import { Button, Layout, LocaleProvider } from "antd";
import HeaderCustom from "./HeaderCustom";
import SiderCustom from "./component/SiderCustom";
import "./style/index.less";
import "./style/antd/index.less";
import Routes from "./routes";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <LocaleProvider locale={zh_CN}>
      <Layout>
        <HeaderCustom />
        <Layout>
          <SiderCustom />
          <Layout>
            <Content>
              <Routes />
            </Content>
            <Footer style={{ textAlign: "center" }}>
              {false ? (
                <div>
                  <Button type="primary">APP-Primary</Button>
                  <Cp />
                </div>
              ) : (
                " copy © karakal {new Date().getFullYear()} created by karakal-fed"
              )}
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </LocaleProvider>
  );
}

export default App;
