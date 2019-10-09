/**
 * 自定义表格控件
 *
 */
import React, { Component } from 'react';
import { Table, Row, Col } from 'antd';
import styles from './TableWidget.module.less';

// let renderFilterType = ({ field, form, props }) => (
//     <div>
//         <span>{field === 'listTypesStr' ? '榜单类型' : '类型'}</span>

//         {/* <FilterType
//             field={field}
//             onSubmit={values => form.handleChangeType(null, values, null, field)}
//             query={props.query}
//             type={field}
//         /> */}
//     </div>
// );

// let getIconType = text => `${text}_ok`;
class TableWidget extends Component {
    state = {
        data: [],
        loading:this.props.defaultFetch||true,
        forceUpdate: false,//强制刷新
        selectedRowKeys: [],
        pageSize:20,
        pageNo:1,
        totalCoun:10,
        pageSizeOptions:[]
    };
    componentDidMount() {
        let {defaultFetch=true}=this.props;
        defaultFetch && setTimeout(() => {
            this.dataSource();
        }, 3000);
    }
    shouldComponentUpdate(nextProps, nextState){
        // this.checkShouldUpdate();
        return true;
    }
    componentDidUpdate(prevProps) {
        // if (!_.isEqual(prevProps.dataSource, this.props.dataSource))
        //     this.setState({ datas: this.props.dataSource, loading: false });
        // 重置强制刷新
        // if (this.state.forceUpdate) this.setState({ forceUpdate: false });
    } 
    checkShouldUpdate=(nextProps, nextState)=>{
    }
    dataSource = () => {
        const dataSource = this.props.tableConfig.dataSource||[];
        this.setState({
            data: [...dataSource],
            loading: false,
        });
    };
    search=(params={ pageNo: this.state.pageNo, pageSize: this.state.pageSize})=>{
        this.setState({ loading: true });
        const {fetchApi,apiParams,callBackData}=this.props;
        let data={
            data:{...apiParams},
        }
        fetchApi(params.pageNo, params.pageSize).then((res)=>{
            let {list}=res;
            callBackData&&callBackData();
            this.setState({
                data:list,  
                loading: false,
            })
        })
        // fetchApi(cloneParams({ ...params }))//获取数据
        // fetchApi(cloneParams({ ...params, isQueryCount: 1 }))//获取分页
        //  Promise.all([getData, getCount]).then(res => {})//合并请求
    }

    //分页器变化回调
    onShowSizeChange=(current, size)=>{
        this.onShowSizeChange(current, size)
    }
    onChange=(page, pageSize)=>{//页码及每页条数
        this.setState({
            pageNo:page,
            pageSize:pageSize
        })
        //通过改变url上的参数发送请求

    }
    showTotal = total => {
        const { pageSize } = this.state;
        return `共计${Math.ceil(total / pageSize)}页, ${total}条`;
    };
    render() {
        let { data, loading, selectedRowKeys, } = this.state;
        let {columns,rowKey,showSelection}=this.props.tableConfig;
        const rowSelection = {
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
                const { handleSelection } = this.props;
                handleSelection && handleSelection(selectedRows);
                this.setState({ selectedRowKeys });
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                key: record.name,
            }),
        };
        let tableConfig = {
            columns,
            rowSelection:showSelection?rowSelection:showSelection,
            rowKey,
        };
        tableConfig = {
            loading,
            pagination: {
                size:'small',
                total:10,//数据总数
                pageSize:5,//每页条数
                current:2,//当前页数
                showTotal:this.showTotal,//用于显示数据总量和当前数据顺
                hideOnSinglePage:false,//只有一页时是否隐藏分页器
                showQuickJumper:true,//是否可以快速跳转至某页
                showSizeChanger:true,//是否可以改变 pageSize
                pageSizeOptions:[20,30,40,50],//指定每页可以显示多少条
                onChange:this.onChange,//页码改变的回调，参数是改变后的页码及每页条数
                onShowSizeChange:this.onShowSizeChange//pageSize 变化的回调
            }, //分页显示位置 可配置分页属性
            // size: 'small',
            dataSource: data, //数据
            ...tableConfig,
        };
        return (
            <div className={styles['table-box']}>
                <Row>
                    <Col span={24}>
                        <Table {...tableConfig} />
                    </Col>
                </Row>
            </div>
        );
    }
}
export default TableWidget;
