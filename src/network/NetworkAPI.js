

import * as Config from '../components/config/Config';
// import {postFetch, getFetch} from './NetworkTools';

export const guiderByPost = (params)=>{
  return Fetch.post(Config.HTTPS_SERVER_URL(Config.GET_GUIDE), params);
};

export const guiderByGet = (params)=>{
  return Fetch.get(Config.HTTPS_SERVER_URL(Config.GET_GUIDE), params);
};
