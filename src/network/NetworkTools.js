
//NetworkTools.js

// import Config from '../components/config/Config';

// static defaultProps = {
//   url: '',
//   formData: {},
//   headers: {}
// }
// let url = 'https://test-api.zoomdu.com/api/guide/getGuide.do?k=796451&r=1504765188.487793&sign=094f26acef787083e42c9ed031780e9c';
// let param = {id:'1082', token:'98059436dde027615d7950a172ff7540'};
//
//
//
//
//"serverUrl: https://test-api.zoomdu.com/api/guide/getGuide.do?k=796451&r=1505784927212&sign=e0b534f817af4efdef49dafc90c796c6"
//
// https://test-api.zoomdu.com/api/guide/getGuide.do?k=796451&r=1505785166487&sign=e7227a0d86d5725661f6e4367b1f697d

// 2017-09-18 16:56:40.723649+0800 Guider[33809:13037033] _____requestUrl:https://api.zoomdu.com/api/guide/getGuide.do?k=796451&r=1505725000.718974&sign=30944096c74b7554e27ace1bedb4e58f
// _____param:{
//     id = 42;
//     token = b64f89f163fd095d554c87df5412fe8d;
// }
//
export const postFetch=(url, params)=>{
  let formData = new FormData();

  for (let [key,value] of Object.entries(params)) {
    formData.append(key, value);
  }
  console.log(formData);
  return new Promise((resolve, reject)=>{
    fetch(url, {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/x-/www-form-urlencoded',
      },
      body: formData,
    })
      .then((response)=>{
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          reject(response.json());
        }
      })
      .then(responseJson=>{
        // console.log(responseJson);
        resolve(responseJson);
      })
      .catch((error)=>{
        reject(error);
      });
  });
};
