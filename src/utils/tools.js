

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
