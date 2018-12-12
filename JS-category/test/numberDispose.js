function dis(integer) {
  // // 将当前的数字字符串根据小数点（.）进行切割
  // const splitNumber = dealWithNumber.split('.');
  // // 整数部分
  // let integer = splitNumber[0] || '';
  // // 小数部分
  // let decimals = splitNumber[1] || '';

  // 校验：是否需要数值分割
  // if (needSeparator) {
    let beginNumber = integer.slice(0, integer.length % 3);
    let afterNumber = integer.slice(integer.length % 3);
    endNum = `${beginNumber}${(beginNumber && afterNumber) ? ',' : ''}${afterNumber ? afterNumber.match(/\d{3}/g).join(',') : ''}`;
  // }
  console.log(endNum, afterNumber.match(/\d{3}/g));
  
}

dis('111111111111');