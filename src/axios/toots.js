import axios from 'axios';
// import React from "react";
//import Raven from 'raven-js';异常数据监控
// import { Alert } from "react-admin-component";

const TIMEOUT = 30000;
const MERGEDATA = ['post', 'put'];
//权限接口
/**
 * @function setOption 数据格式化
 * @param {*} meg 异常提示
 * @param timeout 请求时间
 * @isJson
 */
const setOption = ({
    url,
    data,
    meg = '接口异常',
    method = 'get',
    isFormData,
    isJson,
    timeout = TIMEOUT,
    ...restArgs
}) => {
    const basic = { url, method, timeout };
    if (isFormData) {
        //数据封装在FormData
        let forms = new FormData();
        Object.keys(data).array.forEach(val => {
            forms.append([val], data[val]);
        });
        data = forms;
    }
    //将表示调用字符串的新字符串转换为小写
    if (MERGEDATA.includes(method.toLocaleLowerCase())) Object.assign(basic, { data });
    //设置headers
    Object.assign(basic, {
        headers: {
            //  Authorization: delAuthor ? "" : AuthorizationPc, //将token 添加到Authorization（字段值为身份验证凭证信息）
            'Content-Type': isJson //Json形式
                ? 'application/json'
                : 'application/x-www-form-urlencoded', //application/x-www-form-urlencoded  浏览器的原生 <form> 表单
        },
    });
    return { ...basic, ...restArgs };
};

//失败回调
const handleError = ({ error, msg = '接口异常' }) => {
    console.log(msg);
    // msg = error.code === "ECONNABORTED" ? "接口超时" : msg;
    // Alert.warn({
    //   title: msg,
    //   text: (
    //     <a
    //       href={
    //         "http://media.karakal.com.cn:8090/sentry/mzk-web/?query="
    //         // Raven.lastEventId()
    //       }>
    //       点击查看异常详情
    //     </a>
    //   )
    // });
};
//成功回调
const handleRes = res => {
    // console.log(res);
    const { data } = res;
    if (data.status === 0 && data.msg === '系统异常') handleError();
    return data;
};

/**
 * @exports  get axios get请求
 * @param {*} url 请求接口
 * @param meg 异常提示
 * @param  method  请求方式
 * @axiosCofig axios其他设置
 */

export const get = ({ url, meg, method = 'get', axiosConfig }) =>
    axios(setOption({ url, method, axiosConfig }))
        .then(res => handleRes(res))
        .catch(err => handleError(err, meg));
// axios
//     .get(url)
//     .then(res => handleRes(res))
//     .catch(err => handleError(err, meg));

/**
 * @exports  post axios post请求
 *
 * @param {*} url 请求接口
 * @param meg 异常提示
 * @param data 请求数据
 * @param  method  请求方式
 * @isFormData 是否为FormData
 * @param isJson 是否为json
 * @axiosCofig axios其他设置
 *
 */
export const post = ({
    url,
    data,
    msg = '接口异常',
    method = 'post',
    isFormData,
    isjson,
    axiosConfig,
}) =>
    axios(
        setOption({
            url,
            data,
            msg,
            method,
            isFormData,
            isjson,
            axiosConfig,
        })
    )
        .then(res => handleRes(res))
        .catch(err => handleError(err, msg));

/**
 * @exports downloadFile 下载
 */
export const downloadFile = () => {};
