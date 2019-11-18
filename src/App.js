/*
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-15 17:27:51
 * @LastEditors: yangw5
 * @LastEditTime: 2019-11-18 16:51:51
 */
import React from 'react';
import './App.css';
import Cp from './component';
import { Button, Layout, LocaleProvider } from 'antd';
import HeaderCustom from './HeaderCustom';
import SiderCustom from './component/SiderCustom';
import { BackTop } from './component/widget';
import './style/index.less';
import './style/antd/index.less';
import Routes from './routes';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { getCookie } from './utils';
import { receiveData } from './reducer/action';
import { connect } from 'react-redux'; //设置store
import { bindActionCreators } from 'redux';
import { from } from 'rxjs';
moment.locale('zh-cn');
const { Header, Content, Footer } = Layout;
class App extends React.Component {
    state = {
        collapsed: false, //当前收起状态
    };
    componentDidMount() {
        //权限保存到本地 设置全局用户权限
        localStorage.setItem('user', JSON.stringify({ uid: 369, permissions: ['show', 'show2'] }));
        this.props.receiveData(JSON.parse(localStorage.getItem('user') || {}).permissions, 'auth');
        if (!getCookie('ysLogin')) return;
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <LocaleProvider locale={zh_CN}>
                <Layout style={{ height: '100%' }}>
                    <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} />
                    <Layout
                        style={{
                            height: '100%',
                            overflow: 'hidden',
                        }}
                    >
                        <SiderCustom collapsed={this.state.collapsed} />
                        <Layout style={{ background: '#fff' }}>
                            <Content id="content" style={{ overflow: 'auto' }}>
                                <Routes />
                            </Content>
                            <Footer
                                style={{
                                    textAlign: 'center',
                                    height: '40px',
                                    padding: '10px 50px',
                                }}
                            >
                                {false ? (
                                    <div>
                                        <Button type="primary">APP-Primary</Button>
                                        <Cp />
                                    </div>
                                ) : (
                                    ' copy © karakal {new Date().getFullYear()} created by karakal-fed'
                                )}
                            </Footer>
                            <BackTop id={'content'} />
                        </Layout>
                    </Layout>
                </Layout>
            </LocaleProvider>
        );
    }
}
const mapStateToProps = state => {
    const { auth = { data: {} } } = state.httpData;
    return { auth };
};
const mapDispatchToProps = dispatch => ({
    receiveData: bindActionCreators(receiveData, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
