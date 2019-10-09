/**
 * 仅用于权限的获取，并传递给父组件
 */
import React from 'react'
import { connect } from 'react-redux';

class AuthWiget extends React.Component{
        render(){
            console.log(this.props.auth);
            return this.props.children(this.props.auth.data||{})
        }
}
const mapStateToProps = state => {
    const { auth = {data: {}} } = state.httpData;
    return { auth };
};
export default connect(mapStateToProps)(AuthWiget)