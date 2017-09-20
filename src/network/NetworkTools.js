
//NetworkTools.js

export const postFetch=(url, params)=>{
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
