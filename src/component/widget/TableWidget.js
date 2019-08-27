/**
 * 自定义表格控件
 *
 */
import React, { Component } from 'react';
import { Table, Row, Col } from 'antd';
import styles from './TableWidget.module.less';

let renderFilterType = ({ field, form, props }) => (
    <div>
        <span>{field === 'listTypesStr' ? '榜单类型' : '类型'}</span>

        {/* <FilterType
            field={field}
            onSubmit={values => form.handleChangeType(null, values, null, field)}
            query={props.query}
            type={field}
        /> */}
    </div>
);

let getIconType = text => `${text}_ok`;
class TableWidget extends Component {
    state = {
        data: [],
        loading: true,
        forceUpdate: false,
        selectedRowKeys: [],
    };
    componentDidMount() {
        setTimeout(() => {
            this.getdata();
        }, 3000);
    }
    componentDidUpdate(prevProps) {
        // if (!_.isEqual(prevProps.dataSource, this.props.dataSource))
        //     this.setState({ datas: this.props.dataSource, loading: false });
        // 重置强制刷新
        if (this.state.forceUpdate) this.setState({ forceUpdate: false });
    }
    getdata = () => {
        const dataSource = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
                vrbtFlags: '百度',
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
                vrbtFlags: '谷歌',
            },
        ];
        this.setState({
            data: dataSource,
            loading: false,
        });
    };
    render() {
        let { data, loading, selectedRowKeys } = this.state;
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
        // let { columns } = this.props;
        //表头
        const columns = [
            {
                title: '序号',
                dataIndex: 'key',
                key: 'key',
                width: 80,
            },
            {
                title: props => renderFilterType({ field: 'mvFlag', ...props }),
                dataIndex: 'vrbtFlags',
                render: text => getIconType(text),
                width: 100,
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                width: 200,
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                width: 200,
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
                width: 200,
            },
        ];
        let rowKey = 'key'; //勾选的属性
        let tableConfig2 = {
            columns,
            rowSelection,
            rowKey: row => row[rowKey],
        };
        const tableConfig = {
            rowSelection: null, //可配置项
            loading,
            pagination: 'bottom', //分页显示位置 可配置分页属性
            // size: 'small',
            dataSource: data, //数据
            ...tableConfig2,
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
