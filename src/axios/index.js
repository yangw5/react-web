import * as config from './config';
import { get, post } from './toots';

/**
 * 转码和设置请求参数
 * @param {object} data 参数数据
 * @param {string} key 参数的key
 */
export const setData = (data, key = 'data') => {
    return `${key}=${encodeURIComponent(JSON.stringify(data))}`;
};

export const felsit = () => get({ url: config.FE_LIST });
export const felsit2 = () => get({ url: config.FE_LIST2 });
export const imglsit = data => post({ url: config.IMG_LIST, data, isJson: true });
