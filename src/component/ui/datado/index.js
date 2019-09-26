/*
 * Created: 2019-09-16 08:49:22
 * Author : yang5
 * Email : yangw5@163.com
 * LastEditors : yang5
 * LastEditTime : 2019-09-16 08:49:22
 * -----
 * Description: 
 */


import React, { Component } from 'react';
import DataForm from './DataForm';
import { Button } from 'antd';
class Datado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }
    getInstance = (ref)=>{//hoc组件访问ref
       
        // this.wrappedInstance = ref;
      }
    _showModal = () => {
        this.formRef._open();
        //  this.wrappedInstance._open()
        // this.dataForm._open();
    };

    render() {
        //const inputRef = React.createRef();
        //ref={inputRef}
        //ref={dataForm => (this.dataForm = dataForm)}
        return (
            <div>
                <Button onClick={this._showModal}>弹框</Button>
                <DataForm 
                    wrappedComponentRef={(form) => this.formRef = form}
                >1</DataForm>
            </div>
        );
    }
}
export default Datado;
