/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-03-16 15:14:39
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-16 15:34:25
 * @FilePath: \react-web\src\axios\tools.ts
 */

import axios, { AxiosRequestConfig } from 'axios';
import { message } from 'antd';
interface IFRequestParam {
    url: string;
    msg?: string;
    config?: any;
    data?: any;
    header?: any;
}
/** localStorage获取用户token */
export const getToken = () => localStorage.getItem('qianheToken');
/**
 * 设置axios请求option
 * @param param0
 */
function setAxiosOption(
    requestconfig: AxiosRequestConfig,
    hasAuth: boolean = true
): AxiosRequestConfig {
    Object.assign(requestconfig, {
        headers: {
            ...(getToken() && hasAuth && { Authorization: getToken() }),
            'System-Id': 1,
        },
    });
    return requestconfig;
}
const handleCatch = (res: any, msg: string) => {
    return new Promise((resove, reject) => {
        if (res && res.data && res.data.message) {
            message.warn(res.data.message);
        }
        if (res && res.status === 401) {
            if (window.location.href.includes('login')) {
                return false;
            }
            toLogin(res.data && res.data.message);
        } else {
            message.warn(msg);
        }
        reject({ ...res, data: [] });
    });
};

/**
 * 登录过期跳转登录界面
 */
const toLogin = (message = '登录已过期，请重新登录') => {
    // Alert.warn({
    //     title: message,
    //     onOk: () => {
    //         localStorage.removeItem('qianheToken');
    //         deleteCookie('qianHeLogin');
    //         toHtmlPage('login');
    //     },
    // });
};
export const get = ({ url, msg = '接口异常', config }: IFRequestParam, hasAuth?: boolean) =>
    axios(setAxiosOption({ url, ...config }, hasAuth))
        .then(res => {
            return { ...res.data, headers: res.headers, original: res.data };
        })
        .catch(err => {});
/**
 * 公用post请求
 * @param url       接口地址
 * @param data      接口参数
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
export const post = ({ url, data, msg = '接口异常', config }: IFRequestParam, hasAuth?: boolean) =>
    axios(setAxiosOption({ url, data, method: 'POST', ...config }, hasAuth))
        .then(res => {
            return { ...res.data, headers: res.headers, original: res.data };
        })
        .catch(err => handleCatch(err.response, msg));

/**
 * 通用下载文件函数
 * @param {string} param.url        下载的链接
 * @param {string} param.msg        接口异常提示信息
 * @param {string} param.fileName   保存的文件名
 * @param {string} param.fileType   保存的文件类型
 * @param {func} param.callback     回调读取文件
 * @param {boolean} param.saveFile  是否保存本地文件
 */
export const downloadFile = ({
    data,
    url,
    msg = '接口异常',
    fileName,
    fileType = '.xlsx',
    callback,
    saveFile = true,
}: IFRequestParam & {
    fileName?: string;
    fileType?: string;
    callback?: Function;
    saveFile?: boolean;
}) =>
    axios(setAxiosOption({ url, responseType: 'blob', method: 'GET', data }))
        .then((res: any) => {
            // if (res.data.type === 'application/json') return Alert.warn('暂无下载文件');
            const data = res.data;
            const blob = new Blob([data]);

            const getContent = (callback: Function) => {
                // 获取内容
                const reader = new FileReader();
                reader.onload = function() {
                    // console.log(reader.result);
                    callback(reader.result);
                };
                reader.readAsText(new Blob([data]));
            };
            callback && getContent(callback); // 获取下载文件内容

            if (saveFile) {
                // 本地保存文件
                const url = window.URL.createObjectURL(blob);
                const serverFileName = res.headers['content-disposition']
                    ? res.headers['content-disposition']
                          .replace(/attachment;\s*filename=/g, '')
                          .replace(/"/g, '')
                    : '';
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    `${serverFileName ? decodeURIComponent(serverFileName) : fileName}`
                );
                document.body.appendChild(link);
                link.click();
                link.parentNode && link.parentNode.removeChild(link);
            }
        })
        .catch(err => handleCatch(err.response, msg));
