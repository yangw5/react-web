/*
 * @File:
 * @Description:自定义Context组件
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-05-27 15:16:32
 * @LastEditors: yangw5
 * @LastEditTime: 2020-05-27 15:27:51
 * @FilePath: \mzk-web\src\components\widget\Context.js
 */
import React, { useContext } from 'react';

const MyContext = React.createContext();
const { Provider } = MyContext;

const MyProvider = (props) => {
    return <Provider value={props.contextValue}>{props.Children}</Provider>;
};
const MyConsumer = (props) => {
    const value = useContext(MyContext);
    let renderChildren = () => {
        return React.Children.map(props.children, (child) => {
            return React.cloneElement(child, {
                context: value,
            });
        });
    };
    return renderChildren();
};
export { MyContext, MyProvider, MyConsumer };
