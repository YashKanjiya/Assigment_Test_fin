import axios from 'axios'
import { getAuthToken } from '../Data/getAuthToken';

axios.defaults.baseURL='http://localhost:9292'
axios.defaults.headers.post["Content-Type"]='application/json'

export const request=(method,url,data)=>{
    let headers ={};
    if(getAuthToken()!=null && getAuthToken!="null"){
        headers={"Authorization":`Bearer ${getAuthToken()}`};
    }
    return axios({
        method:method,
        headers: headers,
        url:url,
        data:data
    });
};

export default request;