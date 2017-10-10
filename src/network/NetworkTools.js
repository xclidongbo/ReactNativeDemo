
//NetworkTools.js

/**
 * post 请求
 * @param  {string} url    url
 * @param  {Object} params 参数
 * @return {Promise}        Promise
 */
export const post=(url, params)=>{
  let formData = new FormData();
  // console.log(params);
  for (let [key,value] of Object.entries(params)) {
    formData.append(key, value);
  }
  console.log('\n'+'requestUrl: '+url+'\n'+ 'params: '+ JSON.stringify(params)+'\n');
  return new Promise((resolve, reject)=>{
    fetch(url, {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
    })
      .then((response)=>{
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          reject(response);
        }
      })
      .then(responseJson=>resolve(responseJson))
      .catch((error)=>reject(error));
  });
};

/**
 *  get 请求
 * @param  {string} url    url
 * @param  {object} params 参数
 * @return {Promise}        Promise
 */
export const get=(url, params)=>{
  if (params) {
    let paramsArray = [];
    Object.keys(params).forEach(key=>paramsArray.push(key + '=' + params[key]));
    url += '&' + paramsArray.join('&');
  }
  console.log('url: ' +url);
  return new Promise((resolve, reject)=>{
    fetch(url, {
      method: 'GET',
    })
      .then((response)=>{
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          reject(response);
        }
      })
      .then(responseJson=>resolve(responseJson))
      .catch((error)=>reject(error));
  });
};
