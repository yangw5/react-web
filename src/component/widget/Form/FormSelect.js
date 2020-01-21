import React, { Component } from 'react';
// 解耦
//import { Form } from 'antd';
import { Form, Select } from 'antd';
const { Option } = Select;

// function filterOption() {}

class FormSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            children: null, //option对象
            flog: false, //下拉列表初始化
            fetching: false, //搜索加载
        };
    }
    componentDidMount() {
        //设置自定义静态options
        this.props.options && this.getOptions();
    }
    //搜索查询 建议静态查询
    fetchApi = () => {
        //接口请求筛选
        let { searchApi } = this.props;
        if (searchApi) {
            this.setState({ fetching: true });
            searchApi().then(res => {
                let children = [];
                res.data.list &&
                    res.data.list.length > 0 &&
                    res.data.list.forEach((v, i) => {
                        children.push(
                            <Option key={i} value={v.id.toString()}>
                                {v.name || v.id}
                            </Option>
                        );
                    });
                this.setState({ fetching: false });
            });
        } else {
            //前端静态筛选 filterOption属性控制
        }
    };
    fetchtext = () => {
        console.log('数据变化');
    };
    //自定义静态下拉数据
    getOptions = datas => {
        let children = [];
        let options = this.props.options;
        let flog = this.state.flog;
        if (datas) {
            datas.length > 0 &&
                datas.forEach((v, i) => {
                    children.push(
                        <Option key={i} value={v.id.toString()}>
                            {v.name || v.id}
                        </Option>
                    );
                });
            flog = true;
        } else {
            //为函数的时候自定义下拉列表dom
            if (options && typeof options === 'function') {
                children = options();
            } else {
                options &&
                    options.length > 0 &&
                    options.forEach((v, i) => {
                        children.push(
                            <Option key={i} value={v.id.toString()}>
                                {v.name || v.id}
                            </Option>
                        );
                    });
            }
        }
        this.setState(
            {
                children,
                flog,
            },
            () => {
                return this.state.children;
            }
        );
    };

    setOptions = datas => {
        //静态选项或者动态获取下拉选项
        return this.getOptions(datas);
    };
    //点击下拉获取数据
    focus = open => {
        let { searchOptionsApi } = this.props;
        if (!this.state.flog) {
            console.log('第一次点击下拉获取动态数据' + open);
            searchOptionsApi &&
                searchOptionsApi().then(res => {
                    this.setOptions(res.list);
                });
            // this.setOptions([
            //     { name: '远程数据1', value: 'y1', id: 'y1' },
            //     { name: '远程数据2', value: 'y2', id: 'y2' },
            // ]);
        }
        //第一次点击获取数据，之后不需要
    };
    render() {
        let {
            getFieldDecorator,
            defaultActiveFirstOption = true, //默认选择首项
            field,
            searchApi,
            showSearch,
            mode,
            message,
            filterOption,
            allowClear,
            disabled = false,
            label,
            loading = false,
            labelCol = { span: 4 },
            wrapperCol = { span: 12 },
            autoClearSearchValue,
            notFoundContent,
            maxTagCount,
            maxTagTextLength,
            ...restprops
        } = this.props;
        let rules = [
            {
                required: true,
                message: `请选择${label}`,
            },
        ];
        return (
            <Form.Item
                {...{
                    label,
                    labelCol,
                    wrapperCol,
                }}
            >
                {getFieldDecorator(field, { rules })(
                    <Select
                        {...{
                            labelInValue: searchApi ? true : false,
                            allowClear,
                            defaultActiveFirstOption,
                            disabled,
                            loading,
                            autoClearSearchValue,
                            notFoundContent,
                            maxTagCount,
                            maxTagTextLength,
                            ...restprops,
                        }}
                        showSearch={showSearch} //使单选模式可搜索
                        filterOption={(
                            //前端静态筛选
                            input,
                            option
                        ) =>
                            filterOption &&
                            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        optionFilterProp="children" //搜索过滤
                        getPopupContainer={() => document.getElementById('area')} //菜单渲染位置
                        mode={mode} //设置模式	'multiple' | 'tags'
                        placeholder={message || `请选择${label}`}
                        onChange={(value, option) => {
                            //选中 option，或 input 的 value 变化（combobox 模式下）时，调用此函数
                            this.fetchtext();
                        }}
                        onSelect={() => {
                            //被选中时调用'
                            console.log('被选中时调用');
                        }}
                        onDropdownVisibleChange={open => this.focus(open)} //展开下拉事件回调
                        // onSearch={e =>()=>{
                        //console.log('文本框发生变化')
                        //}}
                        // onDeselect={}//取消选中时调用，参数为选中项的 value (或 key) 值，仅在 multiple 或 tags 模式下生效
                    >
                        {this.state.children}
                    </Select>
                )}
            </Form.Item>
        );
    }
}

export default FormSelect;
