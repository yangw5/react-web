/*
 *使用mockjs提供mock数据接口
 */
import Mock from 'mockjs';
Mock.mock('localhost:3000/test', 'get', () => {
    return {
        code: 200,
        data: {
            name: '本地数据',
        },
        message: '操作成功',
    };
});

Mock.mock('http://test:8000/test', 'get', () => {
    return {
        code: 200,
        data: {
            name: '跨域数据',
        },
        message: '操作成功',
    };
});
