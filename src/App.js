import React from 'react';
import './App.css';
import Cp from './component';
import { Button, Layout, LocaleProvider } from 'antd';
import HeaderCustom from './HeaderCustom';
import SiderCustom from './component/SiderCustom';
import './style/index.less';
import './style/antd/index.less';
import Routes from './routes';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { getCookie } from './utils';
import { receiveData } from './reducer/action';
import { connect } from 'react-redux';//设置store
import { bindActionCreators } from 'redux';
moment.locale('zh-cn');
const { Header, Content, Footer } = Layout;
class App extends React.Component {
    state = {
        collapsed: false,
    };
    componentDidMount() {
        
        //权限保存到本地 设置全局用户权限
        localStorage.setItem('user', JSON.stringify({"uid":369,"permissions":["show","show2"]}));
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
                <Layout>
                    <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} />
                    <Layout
                        style={{
                            height: '990px',
                        }}
                    >
                        <SiderCustom collapsed={this.state.collapsed} />
                        <Layout style={{ background: '#fff' }}>
                            <Content>
                                <Routes />
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>
                                {false ? (
                                    <div>
                                        <Button type="primary">APP-Primary</Button>
                                        <Cp />
                                    </div>
                                ) : (
                                    ' copy © karakal {new Date().getFullYear()} created by karakal-fed'
                                )}
                            </Footer>
                        </Layout>
                    </Layout>
                </Layout>
            </LocaleProvider>
        );
    }
}
const mapStateToProps=state=>{
    const { auth = {data: {}} } = state.httpData;
    return { auth };
}
const mapDispatchToProps=dispatch=>({
    receiveData: bindActionCreators(receiveData, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
