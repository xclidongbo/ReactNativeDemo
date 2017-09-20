

import * as Config from '../components/config/Config';
import {postFetch} from './NetworkTools';

export const requestNetworkForGuider = (params)=>{
  return postFetch(Config.HTTPS_SERVER_URL(Config.GET_GUIDE), params);
};
