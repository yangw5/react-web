
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
export const searchItem=[
    {
        label: '案例ID',
        field: 'caseId',
        type: 'input',
        max: 5,
        validator: (rule, value, callback, max = 10) => {
            if (value && value.length > 10) {
                callback(`不能输入超过${max}个字符`);
            } else {
                callback();
            }
        },
    },
    {
        label: '状态',
        field: 'status',
        type: 'select',
        showSearch: true,
        allowClear: true,
        options: [
            {
                id: '1',
                name: '选项1',
                value: '数据1',
            },
            {
                id: '2',
                name: '选项2',
                value: '数据2',
            },
            {
                id: '3',
                name: '选项3',
                value: '数据3',
            },
        ],
    },
]
const columnsItems = [
    {
        title: '序号',
        dataIndex: 'key',
        key: 'key',
        width: 80,
    },
    // {
    //     title: props => renderFilterType({ field: 'mvFlag', ...props }),
    //     dataIndex: 'vrbtFlags',
    //     render: text => getIconType(text),
    //     width: 100,
    // },
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
let dataSource=[
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
export const formSearchProps={
    title:'前端汇总',
    columnsItems,
    dataSource,
    showSelection:false,
    rowKey:'key',
    btnsRequirement: {
        0: ['show'],
        1: ['show2'],
    },
    
}