/*
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-27 16:22:13
 * @LastEditors: yangw5
 * @LastEditTime: 2019-10-10 17:32:15
 */
/**
 * 转换对象的值为json对象值
 * @param {object} transObj 需要转换对象
 */
export const transformValueJson = transObj => {
    Object.keys(transObj).forEach((v, i) => {
        //处理数组
        if (
            window._.isString(transObj[v]) &&
            (transObj[v].match(/\[\S*\]/g) || transObj[v].match(/\{\S*\}/g))
        ) {
            transObj[v] = JSON.parse(transObj[v]);
        }
    });
    return transObj;
};

/**
 * 修改数组某一项的值
 */
export const setArryItem = (data, oldvalue, newvalue, newdata = []) => {
    data.forEach(v => {
        //遍历第一层
        if (v.key !== oldvalue.key) {
            //不是
            if (v.mumn) {
                //有嵌套
                let cv = { ...v, mumn: [] };
                cv.mumn = setArryItem(v.mumn, oldvalue, newvalue, []);
                newdata.push(cv);
            } else {
                newdata.push(v);
            }
        } else {
            //找到
            newdata.push(newvalue);
        }
    });
    return newdata;
};
