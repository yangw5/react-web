/*
 * doc 通用js函数工具
 * @author yangw5 <www.yangw5@163.com>
 */

/**
 * @exports querySrting - 获取url的参数
 *
 */
export const querySrting = () => {
    let _querySrting = {};
    //获取url ？ 后面的字符串 (区别substr(start,[length])和substring(start,end))
    //window.location相关属性 herf  protocol host port pathname search hash
    let _queryUrl = window.location.search.substr(1);
    let _queryArray = _queryUrl.split('&');
    _queryArray.forEach((v, i) => {
        const _pair = v.split('=');
        if (!_querySrting.hasOwnProperty(_pair[0])) {
            //hasOwnProperty只检查实例属性  (in 包含实例属性和原型属性)
            _querySrting[_pair[0]] = decodeURIComponent(_pair[1]); //decodeURIComponent对URI进行编码
        } else if (typeof _querySrting[_pair[0] === 'string']) {
            const _arr = [decodeURIComponent(_pair[1])]; //同名保持数组 第一个
            _arr.push(_querySrting[_pair[0]]);
            _querySrting[_pair[0]] = _arr;
        } else {
            //第二个
            _querySrting[_pair[0]].push(decodeURIComponent(_pair[1]));
        }
    });
    return _querySrting;
};
/**
 * @module getCookie 通过名称获取cookie
 * @param {*} name -cookie的key
 */
export const getCookie = name => {
    //cookie相关属性：name value domain path Size http secure expires
    let value = `; ${document.cookie}`;
    let pars = value.split(`; ${name}=`); //document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));  return unescape(arr[2]);
    if (pars.length === 2) {
        return pars
            .pop()
            .split(';')
            .shift();
    }
};
/**
 *
 * @param {*} key cookie名称
 * @param {*} value cookie值
 * @param {*} exdays cookie时间设置
 */
export const setCookie = (key, value, exdays) => {
    const d = new Date(); //max-age  escape
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000); //getTime()返回一个时间的格林威治时间数值 表示从1970年1月1日0时0分0秒（UTC，即协调世界时）距离该日期对象所代表时间的毫秒数。
    const expires = 'expires=' + d.toUTCString(); //toUTCString() 方法把一个日期转换为一个字符串，使用UTC时区。 // Mon, 03 Jul 2006 21:44:38 GMT
    document.cookie = `${key}=${value};${expires};path=/`;
};
/**
 *
 * @param {*} name 通过名称删除cookie
 */
export const deleteCookie = name => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};

/**
 * @exports toHtmlPage 页面跳转
 *  origin：协议+域名
 *  test:用来与正则表达式匹配的字符串
 */
export const toHtmlPage = (htmlName, hashUrl = '') => {
    const { location } = window;
    const { pathname } = location;
    const reg = /\/[a-z]*.html/g;
    location.href =
        location.origin +
        pathname.replace(reg.test(pathname) ? reg : pathname, `/${htmlName}.html`) +
        `#/${hashUrl}`;
};
/**
/**
 * 过滤字符串中的数字
 * @param {*} value 数值
 */
export const numberFilter = (value, regex = /\d+\.{0,1}\d*/g) => {
    if (!value) return value;
    // 正则表达式 匹配整数和小数
    const match = (window._.isString(value) ? value : JSON.stringify(value)).match(regex);
    return match ? match[0] : '';
};
/**
 * 按钮权限合并
 * @param {*} btns 按钮数组
 * @param {*} requirement 按钮权限
 */
export const mergeArrWithAuth = (btns = [], requirement) => {
    requirement &&
        Object.keys(requirement).forEach(index => {
            btns[index] = { ...btns[index], requirement: requirement[index] };
        });
    return btns;
};
//权限验证
export const checkAuth = (permissions, requirement, every) => {
    if (!permissions) return true;
    const reqarry = window._.intersection(permissions, requirement);
    return reqarry.length > 0
        ? every && reqarry.length < requirement.length
            ? false
            : true
        : false;
};
