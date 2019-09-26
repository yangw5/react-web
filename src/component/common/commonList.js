import React from 'react';
import * as config from './config'
import {FromSearch} from '../widget'

class CommomList extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
        //获取configType
    }
    componentDidMount(){}
    shouldComponentUpdate(nextprops,nextstate){

    }
    render() {
        let {query}=this.props;
        let {configType}=query;
        let {searchItem, formSearchProps}=config[configType]
        return <div>
            <FromSearch 
             wrappedComponentRef={form => (this.form = form)}
             {
                ...{
                    searchItem,
                    ...formSearchProps
                }
             }
            />
        </div>
    }
}

export default CommomList;
