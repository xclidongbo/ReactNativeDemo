

import {HTTPS_SERVER_URL} from '../components/config/Config';
import {postFetch} from './NetworkTools';

const getGuider = '/api/guide/getGuide.do';

export const requestNetworkForGuider = (params)=>{
  return postFetch(HTTPS_SERVER_URL(getGuider), params);
};
