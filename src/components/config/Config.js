
import forge from 'node-forge';

// var md = forge.md.md5.create();
// md.update('The quick brown fox jumps over the lazy dog');
// console.log(md.digest().toHex());

const HTTPS_SERVER_HOST_URL = ()=>{
  if (__DEV__) {
    //debug 模式
    // return 'https://test-api.zoomdu.com';
    return 'https://api.zoomdu.com';
  } else {
    //release 模式
    return 'https://api.zoomdu.com';
  }
};

const rkey = '796451';
const rdesc = 'Nzk2NDUxMjAxNi0xMi0zMSAxNjo0MDo1Nw==';


export const HTTPS_SERVER_URL = (interfaceTypes='')=>{

  let dateStr = ((new Date().getTime())/1000).toFixed(6);
  console.log(new Date().getTime());
  let kSignStr = rkey + dateStr + rdesc;
  var md = forge.md.md5.create();
  md.update(kSignStr);
  let kSignMd5 = md.digest().toHex();

  let serverUrl = HTTPS_SERVER_HOST_URL()+interfaceTypes+'?k='+rkey+'&r='+dateStr+'&sign='+kSignMd5;
  console.log('serverUrl: '+  serverUrl);

  return serverUrl;
};
